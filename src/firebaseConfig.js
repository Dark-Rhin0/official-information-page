// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Thay thế bằng thông tin cấu hình của bạn
const firebaseConfig = {
    apiKey: "AIzaSyBs4L4AAR5q-lx0srLUqQV4suSNWDlIZUg",
    authDomain: "smartgram-in4.firebaseapp.com",
    databaseURL: "https://smartgram-in4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smartgram-in4",
    storageBucket: "smartgram-in4.appspot.com",
    messagingSenderId: "347484755628",
    appId: "1:347484755628:web:42aa0e12203860b6497109"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
