import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAVwhusCxY4rTnoyaAytfyZdA8sNXjQP7k",
  authDomain: "closed-beach.firebaseapp.com",
  projectId: "closed-beach",
  storageBucket: "closed-beach.appspot.com",
  messagingSenderId: "793546672711",
  appId: "1:793546672711:web:0336b4365e18dd8f6e7f62",
}

const initFirebase = () => {
  console.log("Initializing Firebase App...");
  return initializeApp(firebaseConfig);
}

export default initFirebase
