import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <div className={classes.nav}>
      <div className={classes.nav__content}>
        <div className={classes.nav__link}>
          <Link
            to="/"
            className={`${pathname === "/" && classes["nav__active"]}`}
          >
            Home
          </Link>
          <Link
            to="/category"
            className={`${pathname === "/category" && classes["nav__active"]}`}
          >
            Category
          </Link>
          <Link
            to="/savings"
            className={`${pathname === "/savings" && classes["nav__active"]}`}
          >
            Savings
          </Link>
        </div>
        <div>
          <span>Delivery to </span>
          <span className={classes.address}>206 Spear Street</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
