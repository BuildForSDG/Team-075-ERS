/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
let notificationUrl = '';

self.addEventListener('push', (event) => {
  console.log('Push received: ', event);
  const data = event.data ? JSON.parse(event.data.text()) : {};
  notificationUrl = data.url;
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.message,
      icon: data.icon,
      tag: data.tag
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
      .then((clientList) => {
        if (clients.openWindow) {
          return clients.openWindow(notificationUrl);
        }
      })
  );
});
