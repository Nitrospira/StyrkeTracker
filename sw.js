const CACHE="styrketracker-v2";
const ASSETS=["./", "./index.html", "./manifest.json", "./benpres.png", "./chest-press.png", "./lat-pulldown.png", "./leg-curl.png", "./seated-row.png", "./shoulder-press.png", "./cable-crunch.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
