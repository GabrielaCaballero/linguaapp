// Lingua service worker — hand-written, no dependencies.
// Cache-first for hashed static assets, fonts and icons; network-first for pages with a
// cache fallback; the main routes are precached on install so a cold start works offline.
const VERSION = "lingua-v2-3";
const STATIC = `${VERSION}-static`;
const PAGES = `${VERSION}-pages`;
const ROUTES = ["/", "/path", "/me", "/me/settings", "/me/settings/tutor", "/me/words", "/lesson", "/onboarding", "/placement", "/account", "/write"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PAGES);
      await Promise.all(
        ROUTES.map(async (url) => {
          try {
            const res = await fetch(url, { credentials: "same-origin" });
            if (res.ok) {
              await cache.put(url, res.clone());
              // also warm the JS/CSS referenced by the page
              const html = await res.text();
              const assets = [...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"]+)"/g)].map((m) => m[1]);
              const st = await caches.open(STATIC);
              await Promise.all(assets.map((a) => st.match(a).then((hit) => hit || fetch(a).then((r) => r.ok && st.put(a, r)).catch(() => {}))));
            }
          } catch {
            /* offline during install: skip */
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

// The page sends the static chunks it has loaded (incl. lazily loaded ones) so they are
// available on an offline cold start even if the install pass didn't see them.
self.addEventListener("message", (event) => {
  const d = event.data;
  if (!d || d.type !== "cache-urls" || !Array.isArray(d.urls)) return;
  event.waitUntil(
    caches.open(STATIC).then((cache) =>
      Promise.all(
        d.urls
          .filter((u) => typeof u === "string" && new URL(u, self.location.origin).origin === self.location.origin && new URL(u, self.location.origin).pathname.startsWith("/_next/static/"))
          .map((u) => cache.match(u).then((hit) => hit || fetch(u).then((r) => r.ok && cache.put(u, r)).catch(() => {}))),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // e.g. api.anthropic.com: never cached

  const isStatic = url.pathname.startsWith("/_next/static/") || /\.(?:png|ico|svg|woff2?|webmanifest)$/.test(url.pathname) || url.pathname === "/manifest.webmanifest";
  if (isStatic) {
    event.respondWith(
      caches.open(STATIC).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      }),
    );
    return;
  }

  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html") || url.searchParams.has("_rsc") || req.headers.get("RSC") === "1") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(PAGES);
        try {
          const res = await fetch(req);
          if (res.ok && req.mode === "navigate") cache.put(url.pathname, res.clone());
          return res;
        } catch {
          if (req.mode === "navigate") {
            return (await cache.match(url.pathname)) || (await cache.match("/")) || new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } });
          }
          return new Response("", { status: 503 });
        }
      })(),
    );
  }
});
