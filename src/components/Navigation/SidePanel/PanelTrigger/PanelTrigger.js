import React from "react";
import styles from "./PanelTrigger.module.css";

const panelTrigger = (props) => (
  <div onClick={props.clicked} className={styles.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default panelTrigger;
