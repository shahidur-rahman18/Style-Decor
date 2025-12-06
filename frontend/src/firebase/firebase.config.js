import { initializeApp } from "firebase/app";

const firebaseConfig = {
  /* apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId, */
  apiKey: "AIzaSyCON3juvZQ3FDK0jIFtiw2nDRddZ7aaMEA",
  authDomain: "style-decor-18a02.firebaseapp.com",
  projectId: "style-decor-18a02",
  storageBucket: "style-decor-18a02.firebasestorage.app",
  messagingSenderId: "339286644054",
  appId: "1:339286644054:web:a39a83a85101cd4dd472f7",
};

export const app = initializeApp(firebaseConfig);
