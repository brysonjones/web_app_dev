
import React, { useEffect} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'
import Link from "next/link";
import InputManager from "../components/InputManager";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuth } from "../components/Layout/Firebase/context";

export default function SignedIn() {
  const { user } = useAuth();
  const router = useRouter();

  // check if user is authenticated and re-route to login page id not
  useEffect(() => {
    if (user == null) {
      router.push("/login");
    }
  }, [user]);

  // if user value is not set yet, don't render anything
  if (!user) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>ML App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.title}>
          <h1 className="text-3xl font-bold">ControlNet</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 p-8 content-center">
          <InputManager />
        </div>
      </div>

      <footer className={styles.footer}>   
        <div>
          <button
            onClick={async () => {
              await firebase
                .auth()
                .signOut()
                .then(() => {
                  router.push("/");
                });
            }}
          >
            Sign out
          </button>
        </div>   
        Built by{" "}
        <Link
          href="https://github.com/brysonjones"
          className={styles.footer_link}
        >
          Bryson Jones
        </Link>
      </footer>
    </div>
  );
}
