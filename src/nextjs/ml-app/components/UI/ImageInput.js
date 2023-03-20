import React, { Fragment, useRef } from "react";
import Button from "./Button";
import Canvas from "./Canvas";
import classes from "./ImageInput.module.css";

const ImageInput = (props) => {
  const fileInput = useRef(null);
  return (
    <div className="grid grid-cols-1 gap-1 content-center">
      <div className="grid place-items-center">
        <input
          type="file"
          name="file"
          ref={fileInput}
          onChange={props.onChange}
          style={{ display: "none" }}
        />
        <Button onClick={() => fileInput.current.click()}>Upload Image</Button>
      </div>
      <div className="grid place-items-center">
        {props.isSelected ? (
          <div >
            {props.image && (
              <img
                src={props.image}
                alt="preview image"
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

export default ImageInput;
