import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";



const firebaseConfig = {
    apiKey: "#on request",
    authDomain: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#",
    measurementId: "#"
  };
//firebaseConfig is unique to user. Create firebase collection and paste your config information into the spaces above.


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
