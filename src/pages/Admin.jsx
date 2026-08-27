import { useCallback, useEffect, useState } from "react";
import Seo from "../components/Seo";

const STORAGE_KEY = "elwebo-admin-key";

const Card = ({ title, children, className = "" }) => (
  <section
    className={`bg-white rounded-[14px] shadow p-5 md:p-6 flex flex-col gap-4 ${className}`}
  >
    <h2 className="font-bold font-[Epilogue,Helvetica] text-black text-[17px]">
      {title}
    </h2>
    {children}
  </section>
);

const Bars = ({ rows }) => {
  const max = Math.max(1, ...rows.map((r) => r.count));
  if (rows.length === 0)
    return <p className="text-[15px] text-black/50">Aucune donnée.</p>;

  return (
    <ul className="flex flex-col gap-2.5">
      {rows.map((r) => (
        <li key={r.label} className="flex items-center gap-3">
          <span className="w-[45%] truncate text-[14px] text-black" title={r.label}>
            {r.label}
          </span>
          <span className="flex-1 h-2.5 rounded-full bg-black/8 overflow-hidden">
            <span
              className="block h-full rounded-full bg-[var(--yellow)]"
              style={{ width: `${(r.count / max) * 100}%` }}
            />
          </span>
          <span className="w-10 text-right text-[14px] font-bold text-black">
            {r.count}
          </span>
        </li>
      ))}
    </ul>
  );
};

const Sparkline = ({ series }) => {
  const max = Math.max(1, ...series.map((d) => d.views));
  return (
    <div className="flex items-end gap-[3px] h-[120px]">
      {series.map((d) => (
        <span
          key={d.date}
          className="flex-1 min-w-[3px] rounded-t bg-[#1c1c1c] hover:bg-[var(--yellow)] transition-colors"
          style={{ height: `${Math.max(2, (d.views / max) * 100)}%` }}
          title={`${d.date} — ${d.views} visite${d.views > 1 ? "s" : ""}`}
        />
      ))}
    </div>
  );
};

const Admin = () => {
  const [key, setKey] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) || ""
  );
  const [input, setInput] = useState("");
  const [days, setDays] = useState(30);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (adminKey, range) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/stats?days=${range}`, {
        headers: { "x-admin-key": adminKey },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || `Erreur ${res.status}`);
      setData(json);
      sessionStorage.setItem(STORAGE_KEY, adminKey);
    } catch (e) {
      setError(e.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (key) load(key, days);
  }, [key, days, load]);

  return (
    <div className="w-full min-h-screen bg-[#F7F5F2]">
      <Seo
        title="Tableau de bord – El Webo"
        description="Statistiques de fréquentation du site El Webo."
        path="/admin"
        noindex
      />

      <div className="max-w-[1100px] mx-auto gutter py-10 md:py-16 flex flex-col gap-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2rem] md:text-[2.6rem] leading-[1.1]">
              Tableau de bord
            </h1>
            <p className="mt-1 text-[15px] text-black/60">
              Mesure d'audience sans cookie, hébergée sur votre propre site.
            </p>
          </div>
          {key && (
            <div className="flex items-center gap-2">
              {[7, 30, 90].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDays(d)}
                  className={`rounded-[20px] px-4 py-2 text-[14px] font-bold cursor-pointer transition-colors ${
                    days === d
                      ? "bg-[#1c1c1c] text-white"
                      : "bg-white text-black hover:bg-black/5"
                  }`}
                >
                  {d} j
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  sessionStorage.removeItem(STORAGE_KEY);
                  setKey("");
                  setData(null);
                }}
                className="rounded-[20px] px-4 py-2 text-[14px] font-bold bg-white text-black hover:bg-black/5 cursor-pointer"
              >
                Quitter
              </button>
            </div>
          )}
        </header>

        {!key ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setKey(input.trim());
            }}
            className="bg-white rounded-[14px] shadow p-6 md:p-8 flex flex-col gap-4 max-w-[420px]"
          >
            <label htmlFor="admin-key" className="font-semibold text-black">
              Clé d'accès
            </label>
            <input
              id="admin-key"
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="px-4 py-3 bg-[#f3f3f3] rounded-md text-black focus:outline-none"
              autoComplete="current-password"
              required
            />
            <button
              type="submit"
              className="lift bg-[var(--yellow)] rounded-[20px] px-6 py-3 font-bold text-[#1c1c1c] hover:bg-[#e6be00] cursor-pointer"
            >
              Voir les statistiques
            </button>
            <p className="text-[13px] text-black/55 leading-relaxed">
              La clé correspond à la variable d'environnement{" "}
              <code className="bg-black/5 px-1 rounded">ADMIN_KEY</code> définie
              dans Netlify.
            </p>
          </form>
        ) : (
          <>
            {error && (
              <p
                role="alert"
                className="bg-white rounded-[14px] shadow p-5 text-[#c02718]"
              >
                {error}
              </p>
            )}
            {loading && <p className="text-black/60">Chargement…</p>}

            {data && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <Card title="Pages vues">
                    <p className="font-black italic font-[Epilogue,Helvetica] text-[40px] leading-none text-black">
                      {data.totalViews}
                    </p>
                  </Card>
                  <Card title="Demandes reçues">
                    <p className="font-black italic font-[Epilogue,Helvetica] text-[40px] leading-none text-[#009379]">
                      {data.totalConversions}
                    </p>
                  </Card>
                  <Card title="Taux de conversion">
                    <p className="font-black italic font-[Epilogue,Helvetica] text-[40px] leading-none text-black">
                      {data.totalViews
                        ? (
                            (data.totalConversions / data.totalViews) *
                            100
                          ).toFixed(1)
                        : "0"}
                      <span className="text-[24px]"> %</span>
                    </p>
                  </Card>
                </div>

                <Card title={`Visites sur ${data.days} jours`}>
                  <Sparkline series={data.series} />
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  <Card title="Pages les plus vues">
                    <Bars rows={data.topPaths} />
                  </Card>
                  <Card title="D'où viennent les visiteurs">
                    <Bars rows={data.topRefs} />
                  </Card>
                  <Card title="Appareils">
                    <Bars rows={data.devices} />
                  </Card>
                </div>

                <Card title="Dernières demandes">
                  {data.conversions.length === 0 ? (
                    <p className="text-[15px] text-black/50">
                      Aucune demande sur la période.
                    </p>
                  ) : (
                    <ul className="flex flex-col divide-y divide-black/8">
                      {data.conversions.map((c) => (
                        <li
                          key={c.t}
                          className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2.5"
                        >
                          <span className="font-bold text-black text-[15px]">
                            {c.event}
                          </span>
                          {c.detail && (
                            <span className="text-[14px] text-black/70">
                              {c.detail}
                            </span>
                          )}
                          <span className="ml-auto text-[13px] text-black/45">
                            {new Date(c.t).toLocaleString("fr-FR")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
