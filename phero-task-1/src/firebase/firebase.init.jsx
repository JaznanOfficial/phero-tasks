import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const InitializeConfig = () => {
    const firebaseConfig = {
        //  ENV
        // apiKey: import.meta.env.VITE_API_KEY,
        // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        // projectId: import.meta.env.VITE_PROJECT_ID,
        // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        // appId: import.meta.env.VITE_APP_ID,
        apiKey: "AIzaSyDLmEbWbGgnUZpnex52dMTO8yuoQIPcx-o",
        authDomain: "phero-task.firebaseapp.com",
        projectId: "phero-task",
        storageBucket: "phero-task.appspot.com",
        messagingSenderId: "1088499126882",
        appId: "1:1088499126882:web:0e409cb1f09c261826b73b",
    };

    console.log(import.meta.env.VITE_API_KEY);

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
};

export default InitializeConfig;
