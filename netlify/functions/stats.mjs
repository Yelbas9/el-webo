import { getStore } from "@netlify/blobs";

export const config = { path: "/api/stats" };

const daysBack = (n) => {
  const out = [];
  const d = new Date();
  for (let i = 0; i < n; i += 1) {
    out.push(new Date(d.getTime() - i * 86400000).toISOString().slice(0, 10));
  }
  return out.reverse();
};

const topOf = (obj, limit = 8) =>
  Object.entries(obj || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([label, count]) => ({ label, count }));

export default async (req) => {
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey) {
    return Response.json(
      {
        error:
          "ADMIN_KEY n'est pas défini. Ajoute cette variable d'environnement dans Netlify (Site configuration → Environment variables).",
      },
      { status: 503 }
    );
  }

  const url = new URL(req.url);
  const provided = req.headers.get("x-admin-key") || url.searchParams.get("key");
  if (provided !== adminKey) {
    return Response.json({ error: "Clé invalide." }, { status: 401 });
  }

  const days = Math.min(Number(url.searchParams.get("days")) || 30, 90);
  const dates = daysBack(days);
  const store = getStore("analytics");

  // Compteurs journaliers
  const daily = await Promise.all(
    dates.map(async (date) => {
      const data = await store.get(`daily/${date}`, { type: "json" });
      return { date, ...(data || { views: 0, paths: {}, refs: {}, devices: {} }) };
    })
  );

  // Conversions (une entrée par demande reçue)
  const { blobs } = await store.list({ prefix: "conversions/" });
  const wanted = new Set(dates);
  const recent = blobs.filter((b) => wanted.has(b.key.split("/")[1]));
  const conversions = (
    await Promise.all(
      recent.map((b) => store.get(b.key, { type: "json" }).catch(() => null))
    )
  )
    .filter(Boolean)
    .sort((a, b) => (a.t < b.t ? 1 : -1));

  const merge = (field) =>
    daily.reduce((acc, day) => {
      for (const [k, v] of Object.entries(day[field] || {})) {
        acc[k] = (acc[k] || 0) + v;
      }
      return acc;
    }, {});

  return Response.json(
    {
      days,
      totalViews: daily.reduce((s, d) => s + (d.views || 0), 0),
      totalConversions: conversions.length,
      series: daily.map((d) => ({ date: d.date, views: d.views || 0 })),
      topPaths: topOf(merge("paths")),
      topRefs: topOf(merge("refs")),
      devices: topOf(merge("devices"), 5),
      conversions: conversions.slice(0, 50),
    },
    { headers: { "Cache-Control": "no-store" } }
  );
};
