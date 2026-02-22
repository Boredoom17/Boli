// Copy this file → rename to firebase-config.js → fill in your real values
// Firebase: console.firebase.google.com → Project Settings → Your Apps
// Cloudinary: cloudinary.com → Dashboard + Settings → Upload Presets

export const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"
};

export const cloudinaryConfig = {
  cloud:  "YOUR_CLOUDINARY_CLOUD_NAME",
  preset: "YOUR_UPLOAD_PRESET_NAME"
};