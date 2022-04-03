import React, { useEffect, useState } from "react";

import { View, StyleSheet } from "react-native";

import { Context } from "../context.js";
import Scoreboard from "../components/Scoreboard";

export default function LeaderboardScreen() {
  const { scores, setScores } = React.useContext(Context);

  return (
    <View style={styles.container}>
      <Scoreboard scores={scores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
