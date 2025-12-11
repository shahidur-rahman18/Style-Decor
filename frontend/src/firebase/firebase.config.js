import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId, 
 
};

export const app = initializeApp(firebaseConfig);

/* 
  VITE_API_URL =http://localhost:3000
  VITE_apiKey=AIzaSyCON3juvZQ3FDK0jIFtiw2nDRddZ7aaMEA
  VITE_authDomain=style-decor-18a02.firebaseapp.com
  VITE_projectId=style-decor-18a02
  VITE_storageBucket=style-decor-18a02.firebasestorage.app
  VITE_messagingSenderId=339286644054
  VITE_appId=1:339286644054:web:a39a83a85101cd4dd472f7
  VITE_IMGBB_API_key = b40650a394ad38540313a663c316e7bf
  VITE_CLOUDINARY_CLOUD_NAME = dgur5ib7j
  VITE_CLOUDINARY_UPLOAD_PRESET= plants_image */

