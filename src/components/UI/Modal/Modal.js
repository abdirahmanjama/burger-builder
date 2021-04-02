import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = (props) => (
  <React.Fragment>
    <Backdrop show={props.show} removeBackdrop={props.modalClosed}></Backdrop>
    <div
      className={styles.Modal}
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
