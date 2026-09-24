import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import api from "./api";

const firebaseConfig = {
  apiKey: "AIzaSyDolt32gyCw_AtFgVG9uWpEtKxDjj2e-J4",
  authDomain: "magic-file-54e1e.firebaseapp.com",
  projectId: "magic-file-54e1e",
  storageBucket: "magic-file-54e1e.firebasestorage.app",
  messagingSenderId: "1018899781243",
  appId: "1:1018899781243:web:f0aff2589568aba01034de"
};

const VAPID_KEY = "BP-V9JV9jaCHXaaepIZNfR3M3o0VA6eUVk0L_lDbvu_em0JJN-_lbHtQUJ-2Erc-Qb-W-DrDcG7aDuno47pRl-Q";

export const app = initializeApp(firebaseConfig);

let messaging = null;
if (typeof window !== "undefined" && "serviceWorker" in navigator && "PushManager" in window) {
  try {
    messaging = getMessaging(app);
  } catch (err) {
    console.warn("FCM Messaging initialization note:", err);
  }
}

/**
 * Requests browser permission and registers FCM device token with the backend.
 */
export const requestNotificationPermissionAndRegister = async () => {
  if (typeof window === "undefined" || !("Notification" in window)) {
    console.warn("[FCM] Browser does not support push notifications.");
    return null;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("[FCM] Notification permission was:", permission);
      return null;
    }

    if (!messaging) {
      console.warn("[FCM] Messaging instance not available.");
      return null;
    }

    // Register service worker if not already registered
    let registration;
    try {
      registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
      await navigator.serviceWorker.ready;
    } catch (e) {
      console.error("[FCM] Failed to register service worker:", e);
    }

    const currentToken = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (currentToken) {
      console.log("[FCM] Device Token acquired successfully:", currentToken);
      // Register token in backend
      const authToken = localStorage.getItem("token");
      if (authToken) {
        await api.post("/notifications/register-fcm-token", {
          token: currentToken,
          device_name: navigator.userAgent.slice(0, 100)
        }).catch((err) => {
          console.error("[FCM] Failed to register token on backend:", err);
        });
      }
      return currentToken;
    } else {
      console.warn("[FCM] No registration token returned.");
      return null;
    }
  } catch (err) {
    console.error("[FCM] Error acquiring notification permission/token:", err);
    return null;
  }
};

/**
 * Listens for foreground push messages when app is active.
 */
export const onForegroundMessage = (callback) => {
  if (!messaging) return () => {};
  return onMessage(messaging, (payload) => {
    console.log("[FCM] Foreground notification received:", payload);
    if (callback) {
      callback(payload);
    }
  });
};
