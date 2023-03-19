import React, { Fragment, useState } from "react";
import Button from "./UI/Button";
import ImageInput from "./UI/ImageInput";
import classes from "./FileUpload.module.css";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [responseImage, setResponseImage] = useState(null);
  const [responseSuccess, setResponseSuccess] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]))
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    fetch("http://localhost:5000", {
      crossDomain: true,
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setResponseImage(result['image']);
        setResponseSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Fragment>
      <ImageInput type="file" 
                  name="file" 
                  onChange={changeHandler} 
                  isSelected={isSelected} 
                  image={image} 
      />
      <div>
        <Button onClick={handleSubmission}>Submit</Button>
      </div>
      {responseSuccess ? (
                <div>
                    {responseImage && <img src={`data:image/jpeg;base64,${responseImage}`} className={classes.image}/>}
                </div>
            ) : (
                <p>Wait to receive response to view modified image</p>
            )}
    </Fragment>
  );
}

export default FileUploadPage;
