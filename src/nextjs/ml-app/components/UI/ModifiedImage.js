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
    <div className="grid grid-cols-1 gap-1 content-center">
      <div className="grid place-items-center">
        <Button onClick={handleSubmission}>Submit</Button>
      </div>
      <div className="grid place-items-center">
        {responseSuccess ? (
          <div>
            {responseImage && (
              <img
                src={`data:image/jpeg;base64,${responseImage}`}
                className="p-4"
              />
            )}
          </div>
        ) : (
          <Canvas />
        )}
      </div>
    </div>
  );
};

export default ModifiedImage;
