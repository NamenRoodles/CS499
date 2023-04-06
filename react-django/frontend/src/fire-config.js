import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAQAaofIoasICgRtDqcTNLPMAEdcj-I3DE",
    authDomain: "cscscs-a1c2f.firebaseapp.com",
    databaseURL: "https://cscscs-a1c2f-default-rtdb.firebaseio.com",
    projectId: "cscscs-a1c2f",
    storageBucket: "cscscs-a1c2f.appspot.com",
    messagingSenderId: "949644451254",
    appId: "1:949644451254:web:b5e2e974a6731f4e1ef517",
    measurementId: "G-Y5V7G35KD3"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
