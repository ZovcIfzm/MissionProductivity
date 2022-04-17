import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";

import {
  Colors,
  Header,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const Section = ({ children, title }) => {
  const isDarkMode = false;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >

      <Image source={require('../assets/images/logo.png')} style={styles.headerImage} />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            height: 800
          }}
        >
          <Section title="Tutorial" style={{fontSize: 5}} >
            1) Our app contains four main tabs and features! You just left the main screen, this is where
            you can get a quick rundown of your score!{"\n"}{"\n"}

            2) The next tab is the leaderboard! This is where you can see your score and how it compares to your peers!
            Check the ranking and try to reach first place. That way you can fill up your trophy cabinet and get closer
            to your goals!{"\n"}{"\n"}

            3) Then we come to your trophy cabinet! This is where you can review your passed accomplishments and everything
            you have achieved thus far.{"\n"}{"\n"}

            4) Finally comes one of the most important tabs. The add activity tab! This is where you can go and add new 
            activities that will be calculated into your score. The longer the activity, the greater the score! Keep logging 
            activities to stay ahead!{"\n"}{"\n"}

          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
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
    textAlign: "left",
  },
  highlight: {
    fontWeight: "700",
  },
  headerImage: {
    width: '100%',
    height: '30%'
  }
});

export default HomeScreen;
