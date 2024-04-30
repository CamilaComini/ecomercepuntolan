import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyDn887cWOi-w7e6zQOqEhkeIXJHnWxpjRg",
	authDomain: "react-ecommercepuntolan-844a0.firebaseapp.com",
	projectId: "react-ecommercepuntolan-844a0",
	storageBucket: "react-ecommercepuntolan-844a0.appspot.com",
	messagingSenderId: "855600059602",
	appId: "1:855600059602:web:fbde81ddca78aab15ac90b",
	measurementId: "G-2MXKPLXNZ8"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
