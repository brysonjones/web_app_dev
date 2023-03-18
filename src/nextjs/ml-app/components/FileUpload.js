import React, { Fragment, useState } from "react";
import Button from "./UI/Button";
import ImageInput from "./UI/ImageInput";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

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
    </Fragment>
  );
}

export default FileUploadPage;
