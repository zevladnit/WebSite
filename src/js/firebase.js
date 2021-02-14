import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAoP_WnSHSZugyIMq2HPgjujjQfRtnG4t4",
    authDomain: "website-e691b.firebaseapp.com",
    databaseURL: "https://website-e691b-default-rtdb.firebaseio.com",
    projectId: "website-e691b",
    storageBucket: "website-e691b.appspot.com",
    messagingSenderId: "839149696721",
    appId: "1:839149696721:web:1cffb9435a4539d66f77f0",
    measurementId: "G-CZ2HX2NWMF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var todo = [];
db.collection('todo')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            todo.push(doc.data())
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
console.log(todo);