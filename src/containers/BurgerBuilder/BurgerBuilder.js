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
      purchasable: false,
    };
  }

  updatePurchaseState(ingredients) {
    //state contains dictionary object, I used the object.keys method, passed
    //in the name of the dictionary. this returns the keys,
    //i mapped this new array to return the values we want by mapping keys to values in dictionary.
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);

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
          purchasable={this.state.purchasable}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
