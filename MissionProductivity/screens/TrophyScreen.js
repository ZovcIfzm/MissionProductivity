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
import TrophyDisplay from "../components/Trophy";

export default function TrophyScreen({ navigation }) {
  const { userName, userId } = React.useContext(Context);

  const [data, setData] = useState();
  const tempData = [];

  const q = query(collection(db, "trophies"), where('userID', '==', userId));

    onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      tempData.push(data.t_100);
      tempData.push(data.t_200);
      tempData.push(data.t_300);
      tempData.push(data.t_400);
      tempData.push(data.t_500);
      tempData.push(data.t_600);
      tempData.push(data.t_700);
      tempData.push(data.t_800);
      tempData.push(data.t_900);
      return {
        t_100: data.t_100,
        t_200: data.t_200,
        t_300: data.t_300,
        t_400: data.t_400,
        t_500: data.t_500,
        t_600: data.t_600,
        t_700: data.t_700,
        t_800: data.t_800,
        t_900: data.t_900,
      };
    });
    // console.log(results);
    // console.log(tempData);
    setData(tempData);
  });

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      
      {/* <Text>Testing...</Text> */}
      <TrophyDisplay trophies={data} />
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
