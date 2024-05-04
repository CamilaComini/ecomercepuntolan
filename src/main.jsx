import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDn887cWOi-w7e6zQOqEhkeIXJHnWxpjRg",
    authDomain: "react-ecommercepuntolan-844a0.firebaseapp.com",
    projectId: "react-ecommercepuntolan-844a0",
    storageBucket: "react-ecommercepuntolan-844a0.appspot.com",
    messagingSenderId: "855600059602",
    appId: "1:855600059602:web:ec310f09636ca7895ac90b",
    measurementId: "G-TTZCBPDWJ7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
