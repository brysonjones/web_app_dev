
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyB1xPxjCTj-4nXvbiwH9xJ0Wd0bwAC-qS4",
    authDomain: "first-ml-app-c9e56.firebaseapp.com",
    projectId: "first-ml-app-c9e56",
    storageBucket: "first-ml-app-c9e56.appspot.com",
    messagingSenderId: "701239774605",
    appId: "1:701239774605:web:e71ea619d5118ae26301c4",
    measurementId: "G-MEFHMJNZQZ"
};
const app = firebase.initializeApp(config);

//3. export it for use
export default app;
