import React from 'react';
import styles from './styles';

const Scoreboard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.title}>Scoreboard</View>
        <View style={styles.row}>
          <View style={styles.cell}>Rank</View>
          <View style={styles.cell}>Name</View>
          <View style={styles.cell}>Score</View>
        </View>
        {props.scores.map((item, i) => {
          return (
            <View style={styles.row}>
              <View style={styles.cell}>{i + 1}</View>
              <View style={styles.cell}>{item.name}</View>
              <View style={styles.cell}>{item.score}</View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Scoreboard;
