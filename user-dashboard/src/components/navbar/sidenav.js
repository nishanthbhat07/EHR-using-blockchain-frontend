import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const Sidenav = (props) => (
  <div className="sidebar" style={{ visibility: props.visible }}>
    <div className="main-menu">
      <PerfectScrollbar
        options={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <Nav vertical className="list-unstyled">
          <NavItem>
            <NavLink to="/app/my-data">
              <i class="fas fa-user" /> My Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/my-permissions">
              <i class="fas fa-check" /> My Permissions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/my-prescriptions">
              <i class="fas fa-file-prescription" /> Prescriptions
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
