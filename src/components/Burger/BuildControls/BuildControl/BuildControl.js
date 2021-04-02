import React from "react";
import styles from "./BuildControl.module.css";

const buildControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.More} onClick={props.addIngredients}>
      Add
    </button>
    <button
      className={styles.Less}
      onClick={props.removeIngredients}
      disabled={props.disabled}
    >
      Remove
    </button>
  </div>
);

export default buildControl;
