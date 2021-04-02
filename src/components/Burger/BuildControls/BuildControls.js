import React from "react";
import BuildControl from "../BuildControls/BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

// const priceCalculator = (value) => {
//   if (value < 10) {
//     return value;
//   } else {
//     let newValue = Number.toString(value);
//     newValue + "0";
//     return parseInt(newValue);
//   }
// };

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p className={styles.price}>Current Price: {props.totalPrice.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addIngredients={() => props.addIngredients(ctrl.type)}
        removeIngredients={() => props.removeIngredients(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button
      className={`${styles.OrderButton} ${styles.enable}`}
      disabled={!props.purchasable}
    >
      Order
    </button>
  </div>
);

export default buildControls;
