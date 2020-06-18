
/* eslint-disable no-console */
// import {
//   createSubscription,
//   updateSubscription
// } from './redux/subscription/subscription.actions';

let isSubscribed = false;
let swRegistration = null;
const applicationKey = process.env.REACT_APP_PUBLIC_VAPID_KEY;

// Throw error for missing required Param
const isRequired = () => { throw new Error('missing a required parameter'); };

/**
 * Url Encryption
 *
 * @param {String} base64String
 */
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Add the user's id to the PushSubscription object
 *
 * @param {Object} PushSubscription
 * @param {string} userId
 *
 * @returns JSON
 */
function addUserPushSubscription(PushSubscription, userId) {
  const jsonPS = PushSubscription.toJSON();
  jsonPS.userId = userId;

  return jsonPS;
}

/**
 * Asks user consent to receive push notifications and returns the
 * response of the user, one of granted, default, denied
 */
async function askUserPermission() {
  return Notification.requestPermission();
}

/**
 * Check the permission state for push notifications
 */
async function checkPermission() {
  return Notification.permission;
}

/**
 * Save a push subscription to the database
 *
 * @param {Object} subscriptionObj
 * @param {string} token
 */
async function savePushSubscription(subscriptionObj, token) {
  // return createSubscription(subscriptionObj, token);
  await fetch(`${process.env.REACT_APP_API_URL}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(subscriptionObj)
  });
}

/**
 * Update a push subscription stored in database
 *
 * @param {Object} subscriptionObj
 * @param {string} token
 */
async function updatePushSubscription(subscriptionObj, token) {
  // return updateSubscription(subscriptionObj, token);

  // Get partial endpoint for update as endpoint url cannot be used for lookup
  const partialEndpoint = subscriptionObj.endpoint.substr(subscriptionObj.endpoint.lastIndexOf('/') + 1);

  return fetch(`${process.env.REACT_APP_API_URL}/subscribe/${partialEndpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(subscriptionObj)
  });
}

/**
 * Subscribe to push notifications
 *
 * @param {string} userId
 * @param {string} token
 */
function subscribeToPushNotification(userId, token) {
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(applicationKey)
  })
    .then((subscriptionObj) => {
      console.log('User is subscribed to Push Notifications');

      const subscription = addUserPushSubscription(subscriptionObj, userId);

      savePushSubscription(subscription, token)
        .then((response) => {
          if (response) {
            console.log(`Subscription saved to database.\n${response}`);
          }
        })
        .catch((error) => {
          console.log(`Error saving subscription to database.\n${error}`);
        });

      isSubscribed = true;
    })
    .catch((err) => {
      console.log('Failed to subscribe user: ', err);
    });
}

/**
 * Using service worker create a push notification subscription
 * or get a push notification subscription for update
 *
 * @param {string} userId
 * @param {string} token
 */
export default function subscribeUser(userId = isRequired(), token) {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('sw.js')
      .then((swReg) => {
        console.log('service worker registered');

        swRegistration = swReg;

        swRegistration.pushManager.getSubscription()
          .then((subscription) => {
            isSubscribed = !(subscription === null);

            if (isSubscribed) {
              const subscriptionJSON = addUserPushSubscription(subscription, userId);
              console.log('User is already subscribed');

              // Send for update
              updatePushSubscription(subscriptionJSON, token);
            } else {
              // Check notification permission status
              checkPermission()
                .then((permission) => {
                  if (permission !== 'denied') {
                    console.log(`Notifications permission is ${permission}`);
                    askUserPermission()
                      .then((consent) => {
                        if (consent !== 'granted') {
                          console.log('Consent not granted!');
                        } else {
                          subscribeToPushNotification(userId, token);
                        }
                      })
                      .catch((error) => {
                        console.log(`Error getting permission. ${error}`);
                      });
                  } else {
                    console.log('Notifications denied');
                    alert('Notifications disabled or blocked automatically!\nPlease update in browser settings.');
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          });
      })
      .catch((error) => {
        console.error('Service Worker Error', error);
      });
  } else {
    console.warn('Push messaging is not supported');
  }
}
