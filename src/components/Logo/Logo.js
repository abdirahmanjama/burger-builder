import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="Logo"></img>
    </div>
  );
};

export default logo;
