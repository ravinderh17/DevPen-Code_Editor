
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAlLdY2OoS5ZCcIMTvOuOB6uoKkGdjYZ0E",
    authDomain: "codepen-clone-f0ca8.firebaseapp.com",
    projectId: "codepen-clone-f0ca8",
    storageBucket: "codepen-clone-f0ca8.appspot.com",
    messagingSenderId: "247033811572",
    appId: "1:247033811572:web:04b6b5d00ffca122673721",
    measurementId: "G-EBJ13X5B4H"
};

const app = initializeApp(firebaseConfig);
export default app;