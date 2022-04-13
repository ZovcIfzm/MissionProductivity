import React from "react";
// import "./Header.css";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
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

const LoginScreen = () => {
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
          }}
        >
          <Section title="Login To Your Account">
            Login to your account or sign up for free!
          </Section>
          <Section title="Email">
            Jack123
          </Section>
          <Section title="Password">
            Michigan2023
          </Section>
          <Section title="Sign In">
            Button
          </Section>
          <Section title="Sign Up">
            Button
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: "20%",
    paddingBottom: "5%",
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    position: "relative",
    bottom: 40,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionDescription: {
    position: "relative",
    bottom: 30,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  highlight: {
    fontWeight: "700",
  },
  headerImage: {
    width: '100%',
    height: '35%'
  },
});

export default LoginScreen;
