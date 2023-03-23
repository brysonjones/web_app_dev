import React, { useRef } from "react";
import Button from "./UI/Button";

const UploadForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const fileHandler = (event) => {
    props.setFile(event.target.files[0]);
    props.setImage(URL.createObjectURL(event.target.files[0]));
    props.setIsSelected(true);
  };

  const fileInput = useRef(null);
  return (
    <form onSubmit={handleSubmit}>
        <label style={{ display: "none" }}>Upload Image:
        <input 
            type="file"
            name="file"
            onChange={fileHandler}
            ref={fileInput}
            style={{ display: "none" }}
        />
        </label>
        <label>Enter prompt:
        <input 
            type="text" 
            name="prompt" 
            // value=
            onChange={(e) => props.setPrompt(e.target.value)}
        />
        </label>
        <Button type="submit" onClick={() => fileInput.current.click()}>Select Image</Button>
    </form>
  );
};

export default UploadForm;
