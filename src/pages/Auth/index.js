import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Auth = (props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/home" className={styles.link}>
            Home
          </Link>

          <Link to="/auth" className={styles.link}>
            Auth
          </Link>
        </Toolbar>
      </AppBar>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>Testing 1 2 3</div>
        </div>
      </div>
    </>
  );
};

export default Auth;
