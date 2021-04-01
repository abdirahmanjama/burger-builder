import React from "react";

const layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, Sidebar, Backdrop</div>

      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
