import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = (props) => (
  <React.Fragment>
    <Backdrop show={props.show} removeBackdrop={props.modalClosed}></Backdrop>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? `translateY(${0}px)` : `translateY(${-1000}px)`,
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
