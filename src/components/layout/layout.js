import React, { Component } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SidePanel from "../Navigation/SidePanel/SidePanel";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidePanel: true,
    };
  }

  sidePanelClosedHandler = () => {
    //this keyword refers to class
    this.setState({ showSidePanel: false });
    console.log("close sidepane");
  };

  panelTriggerClicked = () => {
    this.setState((prevState) => {
      return { showSidePanel: !prevState.showSidePanel };
    });
  };

  render() {
    return (
      <>
        <Toolbar panelTriggerClicked={this.panelTriggerClicked} />
        <SidePanel
          open={this.state.showSidePanel}
          closed={this.sidePanelClosedHandler}
        />
        <main className={styles.body}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
