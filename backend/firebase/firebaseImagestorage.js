import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJzOqm5zixgn36WfLa4EWS5ERkJNbsZs0",
  authDomain: "tourist-app-fbbfd.firebaseapp.com",
  projectId: "tourist-app-fbbfd",
  storageBucket: "tourist-app-fbbfd.appspot.com",
  messagingSenderId: "501304600990",
  appId: "1:501304600990:web:d81c8efa61939542ccce8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
