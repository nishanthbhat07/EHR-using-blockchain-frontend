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
            <NavLink to="/app/previous-work">
              <i className="iconsminds-big-data" /> Previous Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/dataset">
              <i className="iconsminds-data-cloud" /> Dataset
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/stats">
              <i className="iconsminds-statistic" /> Statistics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/visualize">
              <i className="iconsminds-monitor-analytics" /> Visualize
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app">
              <i className="simple-icon-logout" /> Logout
            </NavLink>
          </NavItem>
        </Nav>
      </PerfectScrollbar>
    </div>
  </div>
);
export default Sidenav;
