import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyBWHDrrPX5omLnWb007-Ed2lQsGW8Vo7yQ",
    authDomain: "auth-9-ef831.firebaseapp.com",
    projectId: "auth-9-ef831",
    storageBucket: "auth-9-ef831.appspot.com",
    messagingSenderId: "42721792881",
    appId: "1:42721792881:web:a652ac8c98a0965b725cd0"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)