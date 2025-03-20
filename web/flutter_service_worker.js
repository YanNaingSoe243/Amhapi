'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"AMH.png": "cbde7bfb4ec6e6742f1fd253b3140f18",
"assets/AssetManifest.bin": "f0dccf67a5d64ce89e9f733366b5df8c",
"assets/AssetManifest.bin.json": "43757a035c37453461291b0349196e38",
"assets/AssetManifest.json": "978877b232956e06fc05b5fe5cf4c9c3",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/images/AMH.png": "cbde7bfb4ec6e6742f1fd253b3140f18",
"assets/assets/images/big-sandwich-hamburger.jpg": "46a18d157c6bcb6443a5bb15f4d09d22",
"assets/assets/images/boy.png": "24f22516ec47facdc2dc114f8c3de7db",
"assets/assets/images/chicken-pizza-with-bell-red-yellow-pepper.jpg": "041936cbf4d041a2852665440607d5b5",
"assets/assets/images/crispy-fish-nuggets-served.jpg": "c0ee07c35b62d680cad05f8319724969",
"assets/assets/images/delivery_boy.jpg": "0bebdbbd96334d0a5c0ef11a49b93301",
"assets/assets/images/four-boxes-nuggets-with-chicken-prawn-cheese-fish.jpg": "3d538761631b90461ba2fea153bc0b43",
"assets/assets/images/french-fries.jpg": "1a44fdb10997861eb14fe7ba19800344",
"assets/assets/images/image_not_found.png": "2908fb0cab7229f113f1d86250d45856",
"assets/assets/images/menu.jpg": "0f36628dbd763bbe51180615a19614d0",
"assets/assets/images/offer.jpg": "074db503d25a993279624603aa276272",
"assets/assets/images/specky-burger.jpg": "08c847beee0238883dd03d056b90289c",
"assets/assets/images/subscribe_banner.jpg": "88a265d84109063eb00c81f98359b822",
"assets/assets/images/v1.png": "d2953f384575ac2d0c874952eefbdf7a",
"assets/assets/images/v2.png": "53bccf4ca92c78fe6ee2bc592799dce7",
"assets/assets/images/v3.jpg": "1dfcfe74bc105bdacc158eabf3402021",
"assets/assets/images/v4.jpg": "508055d8155ed8cacf2eff96a618da7a",
"assets/FontManifest.json": "a18a55b3757f8aff41ce417b8293c08b",
"assets/fonts/MaterialIcons-Regular.otf": "895863eb967f6c03d2c24b7eb6686476",
"assets/hiraminpro-w3.otf": "3fabfe5faf69d7514122ef7c61d9e62c",
"assets/image_01.png": "a299c520f67de8b3642ff90f910ae81b",
"assets/MaterialIcons-Regular.otf": "895863eb967f6c03d2c24b7eb6686476",
"assets/menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"assets/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/NOTICES": "4a0b06dd5ae70f61ba4fc944d5cffd5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/sent.png": "a76dea49fba5b97bf9504db741d38356",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
<<<<<<< HEAD
"flutter_bootstrap.js": "84169dd8102710853d950f382b91647f",
=======
"flutter_bootstrap.js": "7b0ae8c2b9500f87505851f978d553df",
>>>>>>> 15184aa562b28759299aec384a1a8eec8d641331
"FontManifest.json": "a18a55b3757f8aff41ce417b8293c08b",
"hiraminpro-w3.otf": "3fabfe5faf69d7514122ef7c61d9e62c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"image_01.png": "a299c520f67de8b3642ff90f910ae81b",
"index.html": "cf1b79efc6d1aebb428e84e167559038",
"/": "cf1b79efc6d1aebb428e84e167559038",
"main.dart.js": "8b30bbc3c07f8b36d9a922e68516586c",
"manifest.json": "1703bc9c608d77af8720206d3b6c6608",
"MaterialIcons-Regular.otf": "895863eb967f6c03d2c24b7eb6686476",
"menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"sent.png": "a76dea49fba5b97bf9504db741d38356",
"sqflite_sw.js": "4e90ada89670da328d6c72679eb3f9a7",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "418553361322144ee0b619c22db43035"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
