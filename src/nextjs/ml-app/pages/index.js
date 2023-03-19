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
    <div>
      <Head>
        <title>ML App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.title}>
          <h1>
            ControlNet
          </h1>
        </div>
        <div className={styles.image_viewer}>
          <FileUpload />
        </div>
      </div>

      <footer className={styles.footer}>
        Built by <Link href="https://github.com/brysonjones">Bryson Jones</Link>
      </footer>
    </div>
  );
}
