import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlbDHAbjwtIw28LcyZ5BJq-v1os0Lt3PI",
  authDomain: "elzhour-woman.firebaseapp.com",
  projectId: "elzhour-woman",
  storageBucket: "elzhour-woman.firebasestorage.app",
  messagingSenderId: "302936528044",
  appId: "1:302936528044:web:db4958e38690ce39e33b09",
  measurementId: "G-G1WCB9K71G",
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const FIREBASE_CONFIG_PUBLIC = firebaseConfig;

setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("Auth persistence error:", err);
});

export const COACH_PASSWORD = "80168016";
