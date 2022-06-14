import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQIp0GFUYN4bKugtiOg9AiNK19o02wnKk",
  authDomain: "fir-2ce6e.firebaseapp.com",
  projectId: "fir-2ce6e",
  storageBucket: "fir-2ce6e.appspot.com",
  messagingSenderId: "252667894235",
  appId: "1:252667894235:web:2a3d339787bcda3611effe",
  measurementId: "G-DPR8ZSYD6D",
};

export const App = initializeApp(firebaseConfig);

export default getFirestore();
