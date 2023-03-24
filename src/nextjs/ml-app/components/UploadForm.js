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
        <div className="grid grid-cols-1 gap-1 content-center">
            <label style={{ display: "none" }}>Upload Image:
            <input 
                type="file"
                name="file"
                onChange={fileHandler}
                ref={fileInput}
                style={{ display: "none" }}
            />
            </label>
            <label>
              <span className="text-s font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
                Enter prompt:
              </span>
            <input 
                type="text" 
                name="prompt" 
                // value=
                onChange={(e) => props.setPrompt(e.target.value)}
                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </label>
        </div>
        <div className="grid grid-cols-1 gap-1 content-center">
          <Button type="submit" onClick={() => fileInput.current.click()}>Select Image</Button>
        </div>
    </form>
  );
};

export default UploadForm;
