import React, { Component, Fragment } from "react";
import Sidenav from "../components/navbar/sidenav";
import TopNav from "../components/navbar/topnav";
import { connect } from "react-redux";

class AppLayout extends Component {
  render() {
    const { containerClassName, visible, user, match, history } = this.props;
    return (
      <Fragment>
        <div className={containerClassName}>
          <TopNav history={history} />
          <Sidenav
            visible={
              user && match.path !== "/" && visible ? "visible" : "hidden"
            }
          />
          <main>
            <div className="container-fluid">{this.props.children}</div>
          </main>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  containerClassName: state.menu.containerClassName,
  visible: state.menu.visible,
  user: state.menu.user,
});
export default connect(mapStateToProps, null)(AppLayout);
