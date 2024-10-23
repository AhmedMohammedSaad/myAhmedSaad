'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "32f8e0bb6944a6efe8b1351b72b8facc",
".git/config": "1b6eeefe5bf4d8b720953c2a1689d270",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dd3296abd70d9136502b8409152826a9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d6cb9e885829c98e088664f6d7a58817",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d02e05aeb55c2c9be886ad0f0c8c22d",
".git/logs/refs/heads/main": "370db00fcc914a136dc072fc0bbaa944",
".git/logs/refs/remotes/origin/main": "8253c0618174849f029d70ff7d67e779",
".git/logs/refs/remotes/origin/master": "811f08877b5f785d2dcf282e661d76d6",
".git/objects/04/d93da4a0d48abcc8fe87842cc22c6883121246": "d29abbff5ba50ffafc17be2b6e12846b",
".git/objects/06/2d04ec20ef331e3e0beed292792f8de8dcfe61": "d2ff860e15650b96fb3498262e1b6525",
".git/objects/0a/4d61b54a1cc096f9eddf99e7316dc3bb992d58": "c8ac2e49218e25d51d381cb0cc3fbefa",
".git/objects/0b/25627e09ce3882725c80cc964892f00c88a06d": "27d38e803dad2954d4301a71175b90d2",
".git/objects/0e/8866ac9bb821fe892efff9cf96d819a12813ff": "658a18e024d6b57c30a42e8ce373fb50",
".git/objects/16/92b65ae6fc5c1e1c683d67db316ecf27986871": "f9d6b902a58aeefa04ad9a3c057e30e1",
".git/objects/16/d22d6debb407b57c692e2aeecdb329a5448410": "60fe0d0fd4d8c4cbccb230012935a22c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8f7eb658ad3653009610141ba4615ea984f07a": "82ee15c139405090b78c5a37021d7e1c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/28/e38652c93b53d05c59d0af07042e40e3a7e2c6": "11166da19dd19331b307436761209c1f",
".git/objects/2b/d516e96fa54bdc956aa1371193b54813f608cb": "f8dd1d09b449e29a85a9737812cf51b2",
".git/objects/2e/921b77a92779a4fde981fabeef67a0542b01e5": "509549e5ed673a5e41d078d8e3b2781a",
".git/objects/33/cabd06a129cc28354db6ab3b82f92b7b11decb": "b434a002b18b5198d1ac5cb7235d9612",
".git/objects/42/f917735f9c6c27558e1cc90afda1915b0126c7": "ba86a2a8715ae6c3d041af2d0fb94b84",
".git/objects/43/24a8339c4327a3b1c17240a10672a92b4a33a3": "2e54cb7c05cb1fe0c50032b37f36a360",
".git/objects/44/fc1b3f7b6ec975871d850d64112ee2fe676ded": "74ee92bca9a840567cb238910ba16fa0",
".git/objects/46/e5df1835e61a62deb3c0669edcae8fcb44500d": "16d516d82e17a2bab1e01f4ac7929f19",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/5c/94c28090d7cfd55bd54e285d9e6af00906e24d": "81d76d92e0cd79c842694609d252cf94",
".git/objects/5e/e67fde20083b560ee41a7f99fa77b525fe70fd": "ca5572c59983222577499b7f9fb84aa3",
".git/objects/64/fa0ae204b1163817dc6d052c4d5ab4a99d4f54": "18a0ebfd3bb0ff7ab2db834821a7cd97",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/71/a00db0ab83f09a9eb6c2f09466f184b9726af1": "53743080003bc3eca7d507ec9e6ddbf5",
".git/objects/75/8ee6501352606791c9f045d4eddc4a424cca93": "b83af11b977fb7a8b4b12d9d9366080b",
".git/objects/7b/8db7ab9fc47befc565f92c2db306e921338971": "c56756007da647ee103c64f958e54baa",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/ca52bcd16fe81e7e0e52d2e625cd5b14340d67": "6c36b764d68f9c82dafdeddb2ed1349e",
".git/objects/80/511ffc8e10d8cd9a0d324a186c1fb4d7e65df4": "33a2a392ede77f157312e6a07053f6a8",
".git/objects/83/742f63aa9789aa78025f49d555c60e43a2fcde": "85d7017df3aa6404b2b21d6481643a24",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/85/25363192654b766e4eb4648687cc76b95879a3": "9c2fd31610380f11567436c16c42a901",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/61e2bcafc66d70d6d1371c6202c554b02ec012": "8f9c6a7bfa2141a52d890d18e9aac3ec",
".git/objects/8e/3da740ffd9b4d8bae77631d1af404187b18f90": "5332522e4f837fc7a8336a5e51c997b7",
".git/objects/92/33a0d8155d8b85836a4522708ce0d2e9868b71": "402c7ceba2dafb0e0ab87af2c41923e8",
".git/objects/96/68f9e5bf12d18c6c5cf0dd5418a03124192e06": "e0da99f99796043d896ae79851274a9a",
".git/objects/98/f34bfd4bdd5a680e995365ded07b4152402c3c": "2ae582d4dd6d2b8cc5fb427f62aa1eb4",
".git/objects/9c/bb872418b6eec5834fc2da6822c060810594e1": "9517af9b0e8a592bfaf5721e52d6376a",
".git/objects/9e/2c70ce371eb1e50d76ec3b40d56ccb377c8c0e": "1bb7a07a824969e9d2b4d5ab4b2ef275",
".git/objects/9e/9c944ecc64536b6c9d8c54ab5d2455aacca61a": "0d9ebf683a8a8ba7efa599ebf67d4e9b",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a1/fec2f6fb50dadbf647c73f037b24b6c5b7a92e": "633f005d55c2abbae0c0360103542355",
".git/objects/a3/1d267db91957e0978df532609af5b44ab40c3b": "5e3e88a6419827785cc8846723dd2051",
".git/objects/a3/82af69ce90665cce6bf60455b66f8a2a4520d3": "a8c120812e895c552cbabebcc1d14af5",
".git/objects/a6/4daf148dabc162e482e8519fdb4759a2e5593c": "d170c5354e183d99f53782a4ef9f16ba",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/38d45ab3ea5f1a7a2f11f849b2232900fe987a": "57fa0549362848831f1f92484d805bbc",
".git/objects/b3/468f530f9b254685ef1386fc8d53547d644b2d": "572c9edd117ac5ec889160ed1dd5fe25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e3781a9bbfb6ff13a232e369125247a107d388": "1be364f56eb29fe65f3a632b35d5e3a2",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/3d52b3335eb0bb6f39169a606abefaf701c2c9": "61126c7e75936f8222ae35995a1c3dd5",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/102502fbd71baf521453dc9b49a237124d678d": "6e2b00cd9fa43e907d994439494c3271",
".git/objects/de/53a09ef6c185972da36af8e3c166467a42828c": "c423aedac0ce3891dbc07048a140ab26",
".git/objects/df/ae4a06a392dccf0ffeba7ee22ede3c4504d86b": "ca831044e8a712be94396dc9f406ec61",
".git/objects/e4/6e8c9e35e47b59357dce21c6ded6eaab715a6f": "1d205776bde47520352893e357f7a242",
".git/objects/e7/5ccfd182a42f9a951024a0d0b7601925cd489c": "8b9ac6b94402f052368ef47105246340",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/67cf40aad493fb9f4261d9531d43744609de86": "34bcbc9c090b14b82ec7c7eeb937410b",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/e7216856642cc2e5cc91f450d00a781978fcee": "1513ddc0fecb7b7441e13b3f0f9ef661",
".git/ORIG_HEAD": "601c4943d51e6d6d62ed31ed9bf2ef5c",
".git/refs/heads/main": "77070b8a0728de1aa00cc5559ccca8b5",
".git/refs/remotes/origin/main": "77070b8a0728de1aa00cc5559ccca8b5",
".git/refs/remotes/origin/master": "601c4943d51e6d6d62ed31ed9bf2ef5c",
"assets/AssetManifest.bin": "5f3eef640144c6698bf30dfa0d71cc4d",
"assets/AssetManifest.bin.json": "8974de117cda3d0ede2db4681c8491e0",
"assets/AssetManifest.json": "5825218c2bfaa34afb24701743352e79",
"assets/assets/font1.ttf": "b312f7090f5163d9910c32efea2471e1",
"assets/assets/font2.ttf": "c1f71eb666925c7b7f8c908922bf0d62",
"assets/assets/images/ahmedimage.jpg": "f57d893b8d64c9420459d3870c4adedc",
"assets/assets/images/image10.jpeg": "16ee0349b3821b359a95e0fdbc2bba9b",
"assets/assets/images/image11.jpeg": "4e137595e9fecdca998d77a5d203dbdf",
"assets/assets/images/image12.jpg": "e9ff71c4bda63b430c86eb2e17d1a34f",
"assets/assets/images/image13.jpg": "1c4457b5239c54e04a1272e6ac3f0d40",
"assets/assets/images/image14.jpg": "82efeacc81750c1d1b85ce5bfb4b58da",
"assets/assets/images/image2.jpeg": "4836c1469caae09d6b8acf917ef5a206",
"assets/assets/images/image3.jpeg": "86c9728499410cdd9ea5a8bec3204bfe",
"assets/assets/images/image4.jpeg": "5d72dcee24dbde871123e288c9f073f6",
"assets/assets/images/image5.jpeg": "c40030260fbe0f67ea77e6809f581f97",
"assets/assets/images/image6.jpeg": "55c02fd652d530d548a2ec99b234995a",
"assets/assets/images/image7.jpeg": "bbd6d529fb40fce7d25820573fc27972",
"assets/assets/images/image8.jpeg": "a0ecc35cef51c1474d1a1d4c98289393",
"assets/assets/images/image9.jpeg": "4e137595e9fecdca998d77a5d203dbdf",
"assets/assets/images/imge1.png": "de07810779725b7af24fe874855d5225",
"assets/FontManifest.json": "8b50386e9355e3d4a7588825a5e443a9",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "909d7cd4c63fb5e7ce55770406ac3fa9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "60da4133568ec60ab8447029f51a4bf2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52a01273d13891324dacf8ac47f0870a",
"/": "52a01273d13891324dacf8ac47f0870a",
"main.dart.js": "ac7a7f7cb002ae499c5e1679e4b4acf7",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"};
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
