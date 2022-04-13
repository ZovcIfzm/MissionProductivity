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
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 25,
      fontWeight: "600",
      textAlign: "center",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: "400",
      textAlign: "center",
    },
    highlight: {
      fontWeight: "700",
    },
    headerImage: {
      width: "100%",
      height: "20%",
    },
    signOutButton: {
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
      alignSelf: "center",
      textAlign: "center",
    },
  });