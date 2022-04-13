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
          <Section title="Welcome!" style={{fontSize: 5}} >
            Mission Productivity users! Get ready to achieve your goals by competing
            with your friends. Keep your streak high and grow your score to win!
          </Section>
          <Button title="Want to learn the basics?" style={{fontSize: 5}} >
            1) Check out the leaderboard tab to see how your score competes against your friends. You have a quick view below 
            of your current score!
          </Button>
          <Section title="Current Score">
            190 Points
          </Section>
          <Section title="Current Streak">
            7 Days
          </Section>
          
          
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
    width: '100%',
    height: '30%'
  }
});

export default HomeScreen;
