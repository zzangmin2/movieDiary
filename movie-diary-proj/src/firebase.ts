import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAODNrhLeGP6o_6L2Aq5TqJ6MHpJ_6Zeic",
  authDomain: "movie-dairy.firebaseapp.com",
  projectId: "movie-dairy",
  storageBucket: "movie-dairy.appspot.com",
  messagingSenderId: "192869942441",
  appId: "1:192869942441:web:8034f2d1daec1022a955b8",
  measurementId: "G-QWT0YTQHMY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
