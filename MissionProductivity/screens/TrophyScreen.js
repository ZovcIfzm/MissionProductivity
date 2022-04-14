import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { Context } from "../context.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "../firebase.js";
// import TrophyDisplay from "../components/Achievements";

export default function TrophyScreen({ navigation }) {
  const { trophies } = React.useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      {/* <Text>Testing...</Text> */}
      {/* <TrophyDisplay trophies={trophies} /> */}
    </View>
  );
}
// ToDo: Need to match logged in user to grab correct db entries


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
