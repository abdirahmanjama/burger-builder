import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <NavigationItems></NavigationItems>
  </header>
);

export default toolbar;
