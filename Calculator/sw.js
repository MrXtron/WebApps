self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'https://raw.githubusercontent.com/MrXtron/WebApps/refs/heads/main/Calculator/',
                'https://raw.githubusercontent.com/MrXtron/WebApps/refs/heads/main/Calculator/index.html',
                'https://raw.githubusercontent.com/MrXtron/WebApps/refs/heads/main/Calculator/manifest.json',
                'https://raw.githubusercontent.com/MrXtron/WebApps/refs/heads/main/Calculator/icons/icon-192x192.png',
                'https://raw.githubusercontent.com/MrXtron/WebApps/refs/heads/main/Calculator/icons/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
