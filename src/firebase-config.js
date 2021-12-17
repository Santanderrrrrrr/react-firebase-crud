import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCbTWwujX1bRHmew2piGTdKVPkeYNSri1E",
    authDomain: "instagramcloneapp-react.firebaseapp.com",
    projectId: "instagramcloneapp-react",
    storageBucket: "instagramcloneapp-react.appspot.com",
    messagingSenderId: "523333922948",
    appId: "1:523333922948:web:6c7d621f45715dc38dd2d1",
    measurementId: "G-906G81J7D9"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);