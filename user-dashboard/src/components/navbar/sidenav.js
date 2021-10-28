import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const Sidenav = (props) => (
  <div className="sidebar " style={{ visibility: props.visible }}>
    <div className="main-menu fixed-left">
      <PerfectScrollbar
        options={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <Nav vertical className="list-unstyled">
          <NavItem>
            <NavLink to="/app/my-data">
              <i className="fas fa-user" /> My Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/my-permissions">
              <i className="fas fa-check" /> My Permissions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/my-prescriptions">
              <i className="fas fa-file-prescription" /> Prescriptions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">
              <i className="simple-icon-logout" /> Logout
            </NavLink>
          </NavItem>
        </Nav>
      </PerfectScrollbar>
    </div>
  </div>
);
export default Sidenav;
