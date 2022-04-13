import React, { useEffect } from "react";
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
import { Colors } from "react-native/Libraries/NewAppScreen";
import { getAuth } from "firebase/auth";
import Scoreboard from "../components/Scoreboard";

import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const auth = getAuth();

const Section = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const Leaderboard = (props) => {
  const { userName } = React.useContext(Context);
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  const { scores, setScores } = React.useContext(Context);

  return (
    
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
      <Image
          source={require("../assets/images/leaderboard.gif")}
          style={styles.headerImage}
        />

        <View
          style={{
            backgroundColor: Colors.white,
            height: 800,
          }}
        >
          <Section title={`Let's see where you're at ${userName}!`} style={{ fontSize: 5 }}>
            Here is the leaderboard of this week's most productive users!
          </Section>
        </View>
        <View style={styles.scoreBoard}>
        <Scoreboard scores={scores} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 22,
    paddingHorizontal: 24,
  },
  scoreBoard: {
    fontSize: 500,
    alignSelf: "stretch",
    textAlign: "center",
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
    paddingBottom: 20,
  },
  highlight: {
    fontWeight: "700",
  },
  headerImage: {
    width: "100%",
    height: "20%",
  },
  // signOutButton: {
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   paddingHorizontal: 10,
  //   marginVertical: 10,
  //   alignSelf: "center",
  //   textAlign: "center",
  // },
});

export default Leaderboard;