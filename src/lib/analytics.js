import { ANALYTICS } from "../config";

const endpoint = "/api/track";

const send = (payload) => {
  if (!ANALYTICS.enabled || typeof window === "undefined") return;
  try {
    const body = JSON.stringify(payload);
    // sendBeacon survit à la fermeture de l'onglet ; fetch sert de repli.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
    } else {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      });
    }
  } catch {
    // La mesure ne doit jamais casser le site.
  }
};

/** Enregistre une page vue. Aucune donnée personnelle, aucun cookie. */
export const trackPageView = (path) => {
  send({
    path: path || window.location.pathname,
    referrer: document.referrer || "",
  });
};

/** Enregistre une conversion (demande de devis, rappel…). */
export const trackEvent = (name, props) => {
  send({
    path: window.location.pathname,
    event: name,
    detail: props ? Object.values(props).filter(Boolean).join(" · ") : "",
  });
};
