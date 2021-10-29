import React, { Component, Fragment } from "react";

class UserLayout extends Component {
  componentDidMount() {
    document.body.classList.add("login-container");
  }
  componentWillUnmount() {
    document.body.classList.remove("login-container");
  }

  render() {
    return (
      <Fragment>
        <div className="fixed-background" />

        <div className="container">{this.props.children}</div>
      </Fragment>
    );
  }
}

export default UserLayout;
