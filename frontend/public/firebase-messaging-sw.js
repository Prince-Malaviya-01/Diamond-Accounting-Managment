// Standalone Native & Firebase Web Push Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
  let title = '💎 Diamond Portal Alert';
  let body = 'New stone processing update available.';
  let url = '/';

  if (event.data) {
    try {
      const data = event.data.json();
      
      // 1. Firebase standard notification payload
      if (data.notification) {
        title = data.notification.title || title;
        body = data.notification.body || body;
      }
      
      // 2. Firebase data payload
      if (data.data) {
        title = data.data.title || title;
        body = data.data.body || body;
        url = data.data.url || url;
      }

      if (data.title) title = data.title;
      if (data.body) body = data.body;
      if (data.url) url = data.url;
    } catch (e) {
      try {
        body = event.data.text() || body;
      } catch (err) {}
    }
  }

  const options = {
    body: body,
    icon: '/favicon.png',
    badge: '/favicon.png',
    vibrate: [300, 100, 300, 100, 300],
    requireInteraction: true,
    tag: 'diamond-push-' + Date.now(),
    renotify: true,
    data: {
      url: url,
      timestamp: Date.now()
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification?.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url && 'focus' in client) {
          if (client.url.includes(self.location.origin)) {
            client.navigate(targetUrl);
            return client.focus();
          }
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
