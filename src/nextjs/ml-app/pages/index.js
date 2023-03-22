import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import InputManager from "../components/InputManager";
import { io } from "socket.io-client";

const URL = "http://localhost:5000";
const socket = io(URL, { autoConnect: false });

const connect = () => {
  console.log("connect");
  socket.connect();
};

const clickHandler = () => {
  console.log("sending");
  socket.emit("message", "yeet");
};

export default function Home() {
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
