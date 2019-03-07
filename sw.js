// asignar nombre y version
var CACHE_NAME = 'v3_cache_calificaciones';


//archivos para cache

var urlsCache = [
    './',
    './index.html',
    './segundoP.html',
    './js.js',
    './busca.js',
    './busca2.js',
    './main.css',
    './Chart.min.js',
    './materialize.css',
    './apple-touch-icon.png',
    './favicon-512x512.png',
    './favicon-192x192.png',
    './favicon-32x32.png',
    './favicon-16x16.png',
    './fancy-pants.jpg',
    './js/init.js',
    './js/materialize.js'
];

//instala y guarda los recursos
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsCache);
            })
    );
});

//activar

self.addEventListener('activate', function (event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

//fetch
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});
/* self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request)
            .then(res => {
                if (res) {
                    return res;
                }
                return fetch(e.request);
            })
    );
}); */