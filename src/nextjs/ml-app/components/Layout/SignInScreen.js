
import React, { useEffect} from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuth } from "./Firebase/context";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /authenticated after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/authenticated',
  // We will display Google as auth provider.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  const { user } = useAuth();
  const router = useRouter();

  // check if user is authenticated and re-route to login page id not
  useEffect(() => {
    if (user) {
      router.push("/authenticated");
    }
  }, [user]);

  return (
    <div className="grid grid-cols-1 gap-1 content-center text-center p-8">
      <Link href="/">
        Go back to home page
      </Link>
      <h1 className="text-5xl font-bold">ControlNet</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen