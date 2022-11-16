import React             from 'react';
import ReactDOM          from 'react-dom/client';
import App               from './App';
import reportWebVitals   from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyAVwhusCxY4rTnoyaAytfyZdA8sNXjQP7k",
  authDomain: "closed-beach.firebaseapp.com",
  projectId: "closed-beach",
  storageBucket: "closed-beach.appspot.com",
  messagingSenderId: "793546672711",
  appId: "1:793546672711:web:0336b4365e18dd8f6e7f62"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
