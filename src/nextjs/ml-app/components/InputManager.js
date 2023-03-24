import React, { Fragment, useState } from "react";
import ImageInput from "./UI/ImageInput";
import ModifiedImage from "./UI/ModifiedImage";

import classes from "./InputManager.module.css";
// import { io } from "socket.io-client";

// const URL = "http://localhost:5000";
// const socket = io(URL, { autoConnect: false });

// const connect = () => {
//   console.log("connect");
//   socket.connect();
// };

// const clickHandler = () => {
//   console.log("sending");
//   socket.emit("message", "yeet");
// };

function FileUploadPage() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState(null);

  return (
    <Fragment >
      <ImageInput 
        setFile={setFile}
        setPrompt={setPrompt}
      />
      <ModifiedImage file={file} prompt={prompt} />
    </Fragment>
  );
}

export default FileUploadPage;
