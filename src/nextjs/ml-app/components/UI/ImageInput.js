import React, { Fragment, useRef } from "react";
import Button from "./Button";
import Canvas from "./Canvas";
import classes from "./ImageInput.module.css";

const ImageInput = (props) => {
  const fileInput = useRef(null);
  return (
    <Fragment>
      <input
        type="file"
        name="file"
        ref={fileInput}
        onChange={props.onChange}
        style={{ display: "none" }}
        className={classes.input}
      />
      <Button onClick={() => fileInput.current.click()}>Upload Image</Button>
      {props.isSelected ? (
        <div>
          {props.image && (
            <img
              src={props.image}
              alt="preview image"
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

export default ImageInput;
