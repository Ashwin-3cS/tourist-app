import {firebase} from 'firebase/compat/app';
import "firebase/compat/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCJzOqm5zixgn36WfLa4EWS5ERkJNbsZs0",
  
    authDomain: "tourist-app-fbbfd.firebaseapp.com",
  
    projectId: "tourist-app-fbbfd",
  
    storageBucket: "tourist-app-fbbfd.appspot.com",
  
    messagingSenderId: "501304600990",
  
    appId: "1:501304600990:web:d81c8efa61939542ccce8f",
  
    measurementId: "G-EKT5R1QVDE"
  
  };



const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(); // Corrected the export
export  {app,storage};
