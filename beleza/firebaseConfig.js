// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFJu5eXTtXz4hfK-hn7Z1q8lG_K3GPhR0",
  authDomain: "pokegame-57686.firebaseapp.com",
  projectId: "pokegame-57686",
  storageBucket: "pokegame-57686.appspot.com",
  messagingSenderId: "201605048691",
  appId: "1:201605048691:web:ac3a95c4619e6fa2e1fd06",
  measurementId: "G-S68K1FZY54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); 