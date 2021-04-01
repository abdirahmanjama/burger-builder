import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Burger></Burger>
        <div>BuildControls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
