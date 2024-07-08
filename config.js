import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCYVX-n__Gbpo2LgZzfY2bZlDnQ413dTYw",
    authDomain: "e-ride-4-2fff6.firebaseapp.com",
    projectId: "e-ride-4-2fff6",
    storageBucket: "e-ride-4-2fff6.appspot.com",
    messagingSenderId: "12542179377",
    appId: "1:12542179377:web:971e0afbad50c02999fd10"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


