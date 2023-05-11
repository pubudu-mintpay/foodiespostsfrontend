// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoeO6OOfaJr1oHrmMV9Ub4-fmVPx_4D18",
    authDomain: "food-74934.firebaseapp.com",
    projectId: "food-74934",
    storageBucket: "food-74934.appspot.com",
    messagingSenderId: "920291538575",
    appId: "1:920291538575:web:469319545ef6ce446d22fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);