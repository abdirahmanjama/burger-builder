import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import styles from "./Burger.module.css";
const burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="meat" />

      <BurgerIngredient type="meat" />

      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bottom-bread" />
    </div>
  );
};

export default burger;
