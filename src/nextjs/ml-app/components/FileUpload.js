import React, { Fragment, useState } from "react";
import ImageInput from "./UI/ImageInput";
import classes from "./FileUpload.module.css";
import ModifiedImage from "./UI/ModifiedImage";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
    setIsSelected(true);
  };

  return (
    <Fragment >
      <ImageInput
        type="file"
        name="file"
        onChange={changeHandler}
        isSelected={isSelected}
        image={image}
      />
      <ModifiedImage selectedFile={selectedFile} />
    </Fragment>
  );
}

export default FileUploadPage;
