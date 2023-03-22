import React, { Fragment, useState } from "react";
import ImageInput from "./UI/ImageInput";
import ModifiedImage from "./UI/ModifiedImage";

import classes from "./InputManager.module.css";

function FileUploadPage() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState(null);

  return (
    <Fragment >
      <ImageInput 
        setFile={setFile}
        setPrompt={setPrompt}
      />
      <ModifiedImage selectedFile={file} />
    </Fragment>
  );
}

export default FileUploadPage;
