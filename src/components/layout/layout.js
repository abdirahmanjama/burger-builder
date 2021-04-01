import React, { Fragment } from "react";
import styles from "./Layout.module.css";

const layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={styles.body}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
