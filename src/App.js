import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Layout>
            <BurgerBuilder></BurgerBuilder>
          </Layout>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
