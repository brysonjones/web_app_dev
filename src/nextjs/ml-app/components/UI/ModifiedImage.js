import React, { Fragment, useState } from "react";
import Button from "./Button";
import Canvas from "./Canvas";
import classes from "./ModifiedImage.module.css";

const ModifiedImage = (props) => {
  const [responseImage, setResponseImage] = useState(null);
  const [responseSuccess, setResponseSuccess] = useState(false);

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", props.selectedFile);

    fetch("http://localhost:5000", {
      crossDomain: true,
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setResponseImage(result["image"]);
        setResponseSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Fragment>
      <div>
        <Button onClick={handleSubmission}>Submit</Button>
      </div>
      {responseSuccess ? (
        <div>
          {responseImage && (
            <img
              src={`data:image/jpeg;base64,${responseImage}`}
              className={classes.image}
            />
          )}
        </div>
      ) : (
        <Canvas />
      )}
    </Fragment>
  );
};

export default ModifiedImage;
