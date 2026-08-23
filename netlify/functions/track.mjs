import { getStore } from "@netlify/blobs";

export const config = { path: "/api/track" };

const BOT = /bot|crawler|spider|crawling|headless|lighthouse|preview|facebookexternalhit|slurp|bingpreview/i;

/** Appareil déduit du User-Agent. Aucune empreinte, aucune identification. */
const deviceFrom = (ua = "") => {
  if (/iPad|Tablet/i.test(ua)) return "tablette";
  if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
  return "ordinateur";
};

/** Domaine du référent, uniquement s'il est externe. */
const refFrom = (referrer, host) => {
  if (!referrer) return "direct";
  try {
    const h = new URL(referrer).hostname.replace(/^www\./, "");
    return !h || h === host?.replace(/^www\./, "") ? "direct" : h;
  } catch {
    return "direct";
  }
};

const today = () => new Date().toISOString().slice(0, 10);

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const ua = req.headers.get("user-agent") || "";
  // Les robots ne sont pas des visiteurs : on répond OK sans rien enregistrer.
  if (BOT.test(ua)) return new Response(null, { status: 204 });

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const path = String(body.path || "/").slice(0, 120);
  const event = body.event ? String(body.event).slice(0, 60) : null;
  const detail = body.detail ? String(body.detail).slice(0, 120) : null;
  const day = today();

  try {
    // Les conversions sont stockées une par une : aucune ne doit être perdue.
    if (event) {
      const store = getStore("analytics");
      await store.setJSON(`conversions/${day}/${crypto.randomUUID()}`, {
        t: new Date().toISOString(),
        event,
        detail,
        path,
      });
      return new Response(null, { status: 204 });
    }

    // Les pages vues sont agrégées par jour (compteurs).
    const store = getStore("analytics");
    const key = `daily/${day}`;
    const current = (await store.get(key, { type: "json" })) || {
      views: 0,
      paths: {},
      refs: {},
      devices: {},
    };

    const ref = refFrom(body.referrer, req.headers.get("host"));
    const device = deviceFrom(ua);

    current.views += 1;
    current.paths[path] = (current.paths[path] || 0) + 1;
    current.refs[ref] = (current.refs[ref] || 0) + 1;
    current.devices[device] = (current.devices[device] || 0) + 1;

    await store.setJSON(key, current);
    return new Response(null, { status: 204 });
  } catch (error) {
    // La mesure ne doit jamais dégrader l'expérience : on avale l'erreur.
    console.error("track:", error.message);
    return new Response(null, { status: 204 });
  }
};
