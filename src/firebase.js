import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0hATC0C7LzkshaEmExOZrZU1GLP7WXM",
  authDomain: "techport13-site.firebaseapp.com",
  projectId: "techport13-site",
  storageBucket: "techport13-site.firebasestorage.app",
  messagingSenderId: "787492007860",
  appId: "1:787492007860:web:86eb6cb88d3f3431743c9b",
  measurementId: "G-SDSQ3CZF9T"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);