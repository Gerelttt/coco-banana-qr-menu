// firebase-config.js
// --------------------------------------------------------
// 1. Go to Firebase Console → Project Settings → General
// 2. Copy the web app config object
// 3. Replace every "REPLACE_ME" below with your real values
// 4. Keep this file in the same folder as index.html
// 5. Make sure firebase-app-compat.js is loaded BEFORE this file
// --------------------------------------------------------

// Replace the config object below with your real Firebase config
const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

// Initialize the Firebase app only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
