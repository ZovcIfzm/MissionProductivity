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
import { collection, doc, getDoc, where, onSnapshot } from "firebase/firestore";
import db from "../firebase.js";
import TrophyDisplay from "../components/Trophy";

export default function TrophyScreen({ navigation }) {
  const { userName, userId, userTrophies, setUserTrophies } =
    React.useContext(Context);

  useEffect(async () => {
    const tempData = {};

    const docRef = doc(db, "trophies", userId);
    const docSnap = await getDoc(docRef);

    const data = docSnap.data();
    tempData["t_100"] = data.t_100;
    tempData["t_200"] = data.t_200;
    tempData["t_300"] = data.t_300;
    tempData["t_400"] = data.t_400;
    tempData["t_500"] = data.t_500;
    tempData["t_600"] = data.t_600;
    tempData["t_700"] = data.t_700;
    tempData["t_800"] = data.t_800;
    tempData["t_900"] = data.t_900;

    setUserTrophies([tempData]);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <TrophyDisplay trophies={userTrophies} />
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
