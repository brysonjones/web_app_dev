import React, { Fragment } from "react";
import Canvas from "./UI/Canvas";

const ImageRenderer = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ImageRenderer;
