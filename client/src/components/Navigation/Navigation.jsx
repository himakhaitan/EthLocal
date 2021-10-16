import React from "react";
import classes from "./Navigation.module.css";
import { FaEthereum } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={classes.navBar}>
      <Link to="/">
        <div className={classes.logo}>
          <p>Ethl</p>
          <FaEthereum className={classes.ethIcon} />
          <p>cal</p>
        </div>
      </Link>
      <ul className={classes.navOpts}>
        <li>
          <NavLink activeClassName={classes.active} to="/">
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/privacy">
            Privacy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
