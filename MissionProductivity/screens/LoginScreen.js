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
  Dimensions,
} from "react-native";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { Context } from "../context.js";

import { doc, setDoc } from "firebase/firestore";
import db from "../firebase.js";

var width = Dimensions.get("window").width; //full width
const auth = getAuth();

const signUp = async (email, password, username, setUserName) => {
  if (email != "" && password != "" && username != "") {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userRef = doc(db, "users", user["uid"]);
        setDoc(userRef, { username: username });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    await updateProfile(auth.currentUser, {
      displayName: username,
    }).then(() => {
      setUserName(username);
      console.log("username set to ", username);
    });
  } else {
    alert("Must have email, password, and username filled out");
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
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [initializing, setInitializing] = useState(true);
  const { setUser, setUserId, setUserEmail, setUserName, userName } =
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
        if (!userName) {
          setUserName(user["displayName"]);
        }
        props.navigation.navigate("BottomTabNav");
      } else {
        // User is signed out
        setUser(undefined);
      }
      if (initializing) setInitializing(false);
    });
  });

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
        {signingUp ? (
          <View style={styles.box}>
            <Text>Username</Text>
            <TextInput
              style={styles.bubbleTextfield}
              onChangeText={onChangeUsername}
              value={username}
              placeholder="enter username"
            />
          </View>
        ) : null}
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
              onPress={() => signUp(email, password, username, setUserName)}
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
