var firebaseConfig = {
    apiKey: "AIzaSyCcHu2UCN1rWF9K2Dmui6wNGnrWrHcvNcg",
    authDomain: "todolist-87dec.firebaseapp.com",
    projectId: "todolist-87dec",
    storageBucket: "todolist-87dec.appspot.com",
    messagingSenderId: "507280612364",
    appId: "1:507280612364:web:beb7e9935b06b51b136229"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();