import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon.jsx";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { setContainerClassNames } from "../../redux/menu/menu.actions";

const Header = ({
  setContainerClassNames,
  containerClassName,
  user,
  history,
}) => {
  if (user) {
    return (
      <NavAfterLogin
        setContainerClassNames={setContainerClassNames}
        containerClassName={containerClassName}
      />
    );
  }
  return <HeaderBeforeLogin history={history} />;
};
const mapStateToProps = (state) => ({
  containerClassName: state.menu,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  setContainerClassNames: (classNames) =>
    dispatch(setContainerClassNames(classNames)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderBeforeLogin = ({ history }) => (
  <nav className="navbar fixed-top without-login-view">
    <div className="logo-container">
      <a href="/" className="navbar-logo-1">
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </a>
    </div>

    <div className="buttons">
      <Button
        size="lg"
        onClick={() => history.push("/user/login")}
        className="btn btn-multiple-state"
      >
        For Patients
      </Button>
      <Button size="lg" className="btn btn-multiple-state">
        For Doctors
      </Button>
    </div>
  </nav>
);
const NavAfterLogin = ({ setContainerClassNames, containerClassName }) => (
  <nav className="navbar fixed-top">
    <div className="d-flex align-items-center navbar-left">
      <NavLink
        onClick={() => setContainerClassNames(containerClassName)}
        to="#"
        className="menu-button d-none d-md-block"
      >
        <MenuIcon />
      </NavLink>
    </div>
    <a href="/" className="navbar-logo">
      <span className="logo d-none d-xs-block" />
      <span className="logo-mobile d-block d-xs-none" />
    </a>
  </nav>
);
