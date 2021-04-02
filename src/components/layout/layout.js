import React, { Fragment } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className={styles.body}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
