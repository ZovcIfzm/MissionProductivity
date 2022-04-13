import React, { useState, useEffect } from "react";
// import "./Header.css";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Context } from "../context.js";

var width = Dimensions.get("window").width; //full width
const auth = getAuth();

const signUp = (email, password) => {
  if (email != "" && password != "") {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
};

const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
const LoginScreen = (props) => {
  const [initializing, setInitializing] = useState(true);
  const { user, setUser, userId, setUserId, userEmail, setUserEmail } =
    React.useContext(Context);

  const [signingUp, setSigningUp] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setUserId(user["uid"]);
        setUserEmail(user["email"]);
        props.navigation.navigate("BottomTabNav");
      } else {
        // User is signed out
        setUser(undefined);
      }
      if (initializing) setInitializing(false);
    });
  });

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  if (initializing) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.sectionTitle}>Login To Your Account</Text>
        <Text style={styles.sectionDescription}>
          Login to your account or sign up for free!
        </Text>
        <View style={styles.box}>
          <Text>Email</Text>
          <TextInput
            style={styles.bubbleTextfield}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="enter email"
          />
        </View>
        <View style={styles.box}>
          <Text>Password</Text>
          <TextInput
            style={styles.bubbleTextfield}
            onChangeText={onChangePassword}
            value={password}
            placeholder="enter password"
          />
        </View>
        {signingUp ? (
          <>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => signUp(email, password)}
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSigningUp(false)}>
              <Text style={styles.newUser}>
                Already have an account? Sign in!
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => signIn(email, password)}
            >
              <Text>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSigningUp(true)}>
              <Text style={styles.newUser}>New user? sign up!</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: width,
    backgroundColor: "white",
  },
  sectionContainer: {
    marginVertical: "5%",
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 25,
    color: "black",
    fontSize: 24,
  },
  sectionDescription: {
    marginBottom: 25,
    color: "gray",
    fontSize: 18,
  },
  headerImage: {
    width: "100%",
    height: "30%",
  },
  bubbleTextfield: {
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
  },
  box: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: "center",
    width: "90%",
  },
  signInButton: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  newUser: {
    color: "gray",
  },
});

export default LoginScreen;
