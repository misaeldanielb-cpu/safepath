import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDGPCvwz-x9shH_Y4XKwDcn_x0XxLyjetQ",
    authDomain: "safepath-fbf6f.firebaseapp.com",
    projectId: "safepath-fbf6f",
    storageBucket: "safepath-fbf6f.firebasestorage.app",
    messagingSenderId: "751878212888",
    appId: "1:751878212888:web:c32258bad8a4e6ec84626d"
};

const app = initializeApp(firebaseConfig);

export { app };