import React from "react";
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
import { getAuth, signOut } from "firebase/auth";

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

const HomeScreen = (props) => {
  const { userEmail } = React.useContext(Context);
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const userSignOut = (auth) => {
    signOut(auth)
      .then(() => {
        props.navigation.navigate("Login");
        alert("Signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.headerImage}
        />

        <View
          style={{
            backgroundColor: Colors.white,
            height: 800,
          }}
        >
          <Section title={`Welcome! ${userEmail}`} style={{ fontSize: 5 }}>
            Mission Productivity users! Get ready to achieve your goals by
            competing with your friends. Keep your streak high and grow your
            score to win! For any questions refer to the help icon in the top
            right corner.
          </Section>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() => userSignOut(auth)}
          >
            <Text>Sign Out</Text>
          </TouchableOpacity>
          <Button title="Want to learn the basics?" style={{ fontSize: 5 }}>
            1) Check out the leaderboard tab to see how your score competes
            against your friends. You have a quick view below of your current
            score!
          </Button>
          <Section title="Current Score">190 Points</Section>
          <Section title="Current Streak">7 Days</Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    height: "30%",
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

export default HomeScreen;
