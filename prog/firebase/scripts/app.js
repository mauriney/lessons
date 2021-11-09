<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC2TpFbkAMXv3GtZzT4imYzwLSYj5l7ld4",
    authDomain: "colegio-5c319.firebaseapp.com",
    projectId: "colegio-5c319",
    storageBucket: "colegio-5c319.appspot.com",
    messagingSenderId: "943496050000",
    appId: "1:943496050000:web:713316f5318b0aafd52855",
    measurementId: "G-D561MR868W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>