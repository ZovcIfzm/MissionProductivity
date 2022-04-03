import React from "react";
import styles from "./styles.module.css";

const Scoreboard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.title}>Scoreboard</div>
        <div className={styles.row}>
          <div className={styles.cell}>Rank</div>
          <div className={styles.cell}>Name</div>
          <div className={styles.cell}>Score</div>
        </div>
        {props.scores.map((item, i) => {
          return (
            <div className={styles.row}>
              <div className={styles.cell}>{i + 1}</div>
              <div className={styles.cell}>{item.name}</div>
              <div className={styles.cell}>{item.score}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scoreboard;
