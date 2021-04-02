import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const PRICES = {
  salad: 0.2,
  cheese: 0.7,
  meat: 2.5,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
    };
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const currentPrice = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + currentPrice;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const currentPrice = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - currentPrice;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    console.log("remove");
  };
  render() {
    const disabled = {
      ...this.state.ingredients,
    };
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          removeIngredients={this.removeIngredientHandler}
          addIngredients={this.addIngredientHandler}
          disabled={disabled}
          totalPrice={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
