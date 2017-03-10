importScripts('https://codehubplatform.github.io/EnglishWebContent/cache-polyfill.js');
var cacheName = 'my-site-cache-v1';
var filesToCache = [
  '/EnglishWebContent/css/main.css',
  '/EnglishWebContent/javascript/marksheet.js',
  '/EnglishWebContent/index.html',
  '/EnglishWebContent//2015/01/01/introduction.html',
  '/EnglishWebContent//2015/01/02/internet.html',
  '/EnglishWebContent//2015/01/03/web.html',
  '/EnglishWebContent//2015/01/04/browser.html',
  '/EnglishWebContent//2015/02/01/html-basics.html',
  '/EnglishWebContent//2015/02/02/html-syntax.html',
  '/EnglishWebContent//2015/02/03/html-block-inline.html',
  '/EnglishWebContent//2015/02/04/html-hierarchy.html',
  '/EnglishWebContent//2015/02/05/html-semantics.html',
  '/EnglishWebContent//2015/02/06/html-formatting.html',
  '/EnglishWebContent//2015/02/07/html-valid-document.html',
  '/EnglishWebContent//2015/03/01/html-content.html',
  '/EnglishWebContent//2015/03/02/html-text.html',
  '/EnglishWebContent//2015/03/03/html-inline-semantics.html',
  '/EnglishWebContent//2015/03/03/html-links.html',
  '/EnglishWebContent//2015/03/04/html-images.html',
  '/EnglishWebContent//2015/03/05/html-tables.html',
  '/EnglishWebContent//2015/03/06/html-structure.html',
  '/EnglishWebContent//2015/03/07/html-forms.html',
  '/EnglishWebContent//2015/04/01/css-basics.html',
  '/EnglishWebContent//2015/04/02/why-css-exists.html',
  '/EnglishWebContent//2015/04/03/css-syntax.html',
  '/EnglishWebContent//2015/04/04/css-selectors.html',
  '/EnglishWebContent//2015/04/05/css-inheritance.html',
  '/EnglishWebContent//2015/04/06/css-priority.html',
  '/EnglishWebContent//2015/04/07/css-color-units.html',
  '/EnglishWebContent//2015/04/08/css-size-units.html',
  '/EnglishWebContent//2015/04/09/css-reset.html',
  '/EnglishWebContent//2015/05/01/css-text.html',
  '/EnglishWebContent//2015/05/02/css-font-family.html',
  '/EnglishWebContent//2015/05/03/css-font-size-style-weight.html',
  '/EnglishWebContent//2015/05/04/css-line-height.html',
  '/EnglishWebContent//2015/05/05/css-font-shorthand.html',
  '/EnglishWebContent//2015/05/06/css-text-properties.html',
  '/EnglishWebContent//2015/06/01/css-box-model.html',
  '/EnglishWebContent//2015/06/02/css-background.html',
  '/EnglishWebContent//2015/06/03/css-display.html',
  '/EnglishWebContent//2015/06/04/css-height-width-overflow.html',
  '/EnglishWebContent//2015/06/05/css-border.html',
  '/EnglishWebContent//2015/06/06/css-padding.html',
  '/EnglishWebContent//2015/06/07/css-margin.html',
  '/EnglishWebContent//2015/06/08/css-size-shorthand-wheel.html',
  '/EnglishWebContent//2015/07/01/css-positioning.html',
  '/EnglishWebContent//2015/07/02/css-the-flow.html',
  '/EnglishWebContent//2015/07/03/css-position.html',
  '/EnglishWebContent//2015/07/04/css-float-clear.html',
  '/EnglishWebContent//2015/08/01/css-advanced.html',
  '/EnglishWebContent//2015/08/02/css-pseudo-classes.html',
  '/EnglishWebContent//2015/08/03/css-gradients.html',
  '/EnglishWebContent//2015/08/04/css-transitions.html',
  '/EnglishWebContent//2015/08/05/css-animations.html',
  '/EnglishWebContent//2015/08/06/css-transform.html',
  '/EnglishWebContent//2015/08/07/css-responsiveness.html',
  '/EnglishWebContent/javascript/codemirror.js',
  '/EnglishWebContent/javascript/mode/xml/xml.js',
  '/EnglishWebContent/javascript/mode/htmlmixed/htmlmixed.js'



];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.log('[*] Serving cached: ' + event.request.url);
                    return response;
                }

                console.log('[*] Fetching: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );
});