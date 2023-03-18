import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import FileUpload from '../components/FileUpload'
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
    <div className={styles.main}>
      <Head>
        <title>ML App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
        <div>
          <FileUpload />
        </div>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
