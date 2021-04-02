import React, { Fragment } from "react";

import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
  const price = props.price;
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order:</h3>
      <p>You've selected the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Price: £{price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" click={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" click={props.purchaseContinue}>
        Continue
      </Button>
      <Button btnType="Reset" click={props.reset}>
        Reset
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
