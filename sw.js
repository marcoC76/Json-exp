// asignar nombre y version
const CACHE_NAME = 'v1_cache_calificaciones';

//archivos para cache

var urlsCache = [
    './',
    './js.js',
    './busca.js',
    './main.css',
    './materialize.css',
    './apple-touch-icon.png',
    './favicon-512x512.png',
    './favicon-192x192.png',
    './favicon-32x32.png',
    './favicon-16x16.png',
    './fancy-pants.jpg',
    './js/init.js',
    './js/materialize.js',
];

//instala y guarda los recursos
self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
                .then(cache =>{
                    return cache.addAll(urlsCache)
                                .then(()=>{
                                    self.skipWaiting();
                                })
                                .catch(err=>{
                                    console.log('no se pudo cachear');
                                })
                })
    )
});

//activar

//fetch