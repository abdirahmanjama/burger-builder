import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SidePanel.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SidePanel = (props) => {
  let attachedStyles = [styles.SidePanel, styles.Close];

  if (props.open) {
    attachedStyles = [styles.SidePanel, styles.Open];
  }
  return (
    <>
      <Backdrop show={props.open} removeBackdrop={props.closed}></Backdrop>
      <div className={attachedStyles.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SidePanel;
