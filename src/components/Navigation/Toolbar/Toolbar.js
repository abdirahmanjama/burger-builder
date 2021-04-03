import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import PanelTrigger from "../SidePanel/PanelTrigger/PanelTrigger";
const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <PanelTrigger clicked={props.panelTriggerClicked}></PanelTrigger>
    <Logo className={styles.Logo}></Logo>
    <nav className={styles.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
