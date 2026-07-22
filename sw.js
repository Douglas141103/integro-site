const CACHE_NAME = "integro-pwa-v20260721-presenca-facial-auto";

const SAFE_STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/assets/pwa/icon-192.png",
  "/assets/pwa/icon-512.png",
  "/logo-whatsapp.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        SAFE_STATIC_ASSETS.map((url) => cache.add(url))
      )
    )
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );

  self.clients.claim();
});

function shouldNeverCache(url) {
  const path = url.pathname;

  return (
    path.startsWith("/portal/") ||
    path.startsWith("/portal-professor/") ||
    path.startsWith("/portal-familia/") ||
    path.startsWith("/assets/instagram/") ||
    path === "/portal/config.js" ||
    path.endsWith(".js") ||
    path.endsWith(".css") ||
    path.includes("config.js") ||
    path.includes("app.js") ||
    path.includes("dashboard") ||
    path.includes("login")
  );
}

async function networkOnly(request) {
  return fetch(request, {
    cache: "reload"
  });
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const fresh = await fetch(request, {
      cache: "reload"
    });

    if (fresh && fresh.ok) {
      cache.put(request, fresh.clone());
    }

    return fresh;
  } catch (error) {
    const cached = await cache.match(request);

    if (cached) return cached;

    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok) {
        cache.put(request, fresh.clone());
      }

      return fresh;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (shouldNeverCache(url)) {
    event.respondWith(networkOnly(request));
    return;
  }

  const acceptsHtml = request.headers.get("accept")?.includes("text/html");

  if (request.mode === "navigate" || acceptsHtml) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
