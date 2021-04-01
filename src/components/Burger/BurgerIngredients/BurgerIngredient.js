import React from "react";
import styles from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

{
  /*This class contains the ingredient logic. It is a functional/stateless component.*/
}
//PropTypes validates our prop entries
//Class name, add proptypes property set it equal to JS Object.
const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bottom-bread":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={styles.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={styles.Salad}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
