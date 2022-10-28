import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import classes from "./Layout.module.css";

function Layout() {
  return (
    <div className={classes.Layout}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
