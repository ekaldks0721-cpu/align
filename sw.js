// Align 오프라인 지원: 앱 파일은 미리 저장해 두고, 인터넷이 되면 새 버전을 받아 옴
const CACHE = 'align-v49';
const APP = ['./', './index.html', './manifest.webmanifest', './i18n-en.js', './firebase-config.js', './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon.svg', './fonts/Galmuri11.woff2', './fonts/Galmuri11-Bold.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP.map(u => new Request(u, { cache: 'no-cache' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('align-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 화면(HTML)과 동기화 설정: 인터넷이 되면 최신 것을, 안 되면 저장해 둔 것을
  const isCfg = url.origin === location.origin && url.pathname.endsWith('/firebase-config.js');
  if (req.mode === 'navigate' || isCfg) {
    const key = isCfg ? './firebase-config.js' : './index.html';
    // cache:'no-cache' → 브라우저가 잠깐 들고 있는 옛 파일 말고 늘 서버에 새 버전이 있는지 확인
    e.respondWith(fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' })
      .then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(key, cp)); } return r; })
      .catch(() => caches.match(key)));
    return;
  }

  // 글꼴(Google Fonts), 동기화 프로그램(Firebase), 앱 파일: 저장해 둔 것을 바로 쓰고 뒤에서 새로 받아 둠
  const fbSdk = url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/');
  if (url.origin === location.origin || fbSdk || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
  }
});

// 알림을 누르면 열려 있는 Align 창으로 가고, 없으면 새로 엶
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(ws => {
    const w = ws.find(c => c.url.startsWith(self.registration.scope));
    return w ? w.focus() : self.clients.openWindow('./');
  }));
});
