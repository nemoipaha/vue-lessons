import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDrqyJ8SZccot1y9KV5xvRyAzXONkMNiWQ",
    authDomain: "test-project-5bc2d.firebaseapp.com",
    databaseURL: "https://test-project-5bc2d.firebaseio.com",
    projectId: "test-project-5bc2d",
    storageBucket: "test-project-5bc2d.appspot.com",
    messagingSenderId: "361976177253"
};

firebase.initializeApp(config);

export default firebase;
