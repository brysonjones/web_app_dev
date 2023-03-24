// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  return (
    <div className="grid grid-cols-1 gap-1 content-center text-center p-8">
      <h1 className="text-5xl font-bold">ControlNet</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen