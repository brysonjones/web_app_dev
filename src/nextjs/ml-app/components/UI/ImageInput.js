import React, { Fragment, useRef, useState } from "react";
import Button from "./Button";
import ImageRenderer from "../ImageRenderer";
import UploadForm from "../UploadForm";

import classes from "./ImageInput.module.css";

const ImageInput = (props) => {

  const [image, setImage] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const fileInput = useRef(null);
  return (
    <div className="grid grid-cols-1 gap-1 content-center">
      <div className="grid place-items-center">
        <UploadForm  
          setFile={props.setFile}
          setPrompt={props.setPrompt}
          setImage={setImage}
          setIsSelected={setIsSelected}
        />
      </div>
      <div className="grid place-items-center">
        <ImageRenderer 
          isSelected={isSelected}
          image={image}
        />
      </div>
    </div>
  );
};

export default ImageInput;
