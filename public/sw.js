let cacheData = "appV1"; // Corrected variable name

this.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/0.bundle.js',
                '/index.html',
                '/'
            ]);
        })
    );
});

this.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request).catch((error) => {
                console.error('Fetch failed:', error);
                throw error;
            });
        })
    );
});
