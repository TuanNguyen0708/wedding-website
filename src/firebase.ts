import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD5p3tILDfVLEXf9xrvN9UuNkoT1kKvQfE",
  authDomain: "wedding-3f966.firebaseapp.com",
  projectId: "wedding-3f966",
  storageBucket: "wedding-3f966.firebasestorage.app",
  messagingSenderId: "394178729092",
  appId: "1:394178729092:web:6f50dec276c90b40cd9ed1",
  measurementId: "G-4Q7BNENMNH"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
let analytics;

// Only initialize analytics in the browser
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics }; 