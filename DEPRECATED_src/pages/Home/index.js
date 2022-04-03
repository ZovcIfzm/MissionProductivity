import React from "react";
import { Context } from "../../context.js";
import Scoreboard from "../../components/Scoreboard";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = (props) => {
  const { scores, setScores } = React.useContext(Context);

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
          <div className={styles.column}>
            <Scoreboard scores={scores} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
