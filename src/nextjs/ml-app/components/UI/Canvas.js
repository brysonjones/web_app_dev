import React, { Fragment } from "react";
import classes from "./Canvas.module.css";

const Canvas = (props) => {
  return (
    <div className={`${classes.canvas} rounded-3xl w-5/6`}>
      <span className={classes.canvas_text}>Waiting for content</span>
    </div>
  );
};

export default Canvas;
