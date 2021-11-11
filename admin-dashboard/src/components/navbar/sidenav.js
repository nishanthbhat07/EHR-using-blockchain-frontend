import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const MenuForDoctors = [
  {
    label: "Add Patient",
    to: "/app/add-patient",
    icon: "fas fa-user-plus",
  },
  {
    label: "View Reports",
    to: "/app/view-patient-medical",
    icon: "fas fa-file-medical-alt",
  },
  {
    label: "My Patients",
    to: "/app/view-my-patient",
    icon: "fas fa-hospital-user",
  },
  {
    label: "Logout",
    to: "/doctor/login",
    icon: "simple-icon-logout",
  },
];

const MenuForAdmin = [
  {
    label: "All Doctors",
    to: "/app/doctors",
    icon: "fas fa-user-md",
  },
  {
    label: "All Patients",
    to: "/app/patients",
    icon: "fas fa-wheelchair",
  },
  {
    label: "Add Doctor",
    to: "/app/add-doctor",
    icon: "fas fa-file-medical",
  },
  {
    label: "Logout",
    to: "/doctor/login",
    icon: "simple-icon-logout",
  },
];

const Sidenav = (props) => (
  <div className="sidebar " style={{ visibility: props.visible }}>
    <div className="main-menu fixed-left">
      <PerfectScrollbar
        options={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <Nav vertical className="list-unstyled">
          {localStorage.getItem("role") === "admin" &&
            MenuForAdmin.map((menu, index) => (
              <NavItem key={index}>
                <NavLink to={menu.to}>
                  <i className={menu.icon} /> {menu.label}
                </NavLink>
              </NavItem>
            ))}
          {localStorage.getItem("role") === "doctor" &&
            MenuForDoctors.map((menu, index) => (
              <NavItem key={index}>
                <NavLink to={menu.to}>
                  <i className={menu.icon} /> {menu.label}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
      </PerfectScrollbar>
    </div>
  </div>
);
export default Sidenav;
