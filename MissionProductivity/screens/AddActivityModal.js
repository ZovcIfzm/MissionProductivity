import { TabRouter } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { route } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  submitActivity,
  checkInputs,
} from "../components/AddActivity/submitActivity.js";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Context } from "../context.js";
import React from "react";

const AddActivityModal = (props) => {
  const name = props.route.params.name;
  const category = props.route.params.category;
  const _values = {
    hours: 0,
    mins: 0,
    rating: 0,
  };
  const navigation = useNavigation();
  const {
    userId,
    userName,
    setUserScore,
    userActivities,
    setUserActivities,
    setUserTrophies,
  } = React.useContext(Context);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.separator1} />
        <View style={styles.time}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Hours</Text>
            <TextInput
              style={styles.inputHours}
              keyboardType="numeric"
              placeholder="0"
              maxLength={2}
              placeholderTextColor="black"
              onChangeText={(val) => (_values.hours = val)}
            />
          </View>

          <View style={styles.inputWrap2}>
            <Text style={styles.label}>Minutes</Text>
            <TextInput
              style={styles.inputMins}
              keyboardType="numeric"
              placeholderTextColor="black"
              placeholder="0"
              onChangeText={(val) => (_values.mins = val)}
            />
          </View>
        </View>
        <View style={styles.separator1} />
        <AirbnbRating
          showRating
          startingValue={(val) => (_values.rating = val)}
          onStartRating={(val) => (_values.rating = val)}
          onFinishRating={(val) => (_values.rating = val)}
          selectedColor="#1CB8AE"
          reviewColor="#1CB8AE"
        />
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <View style={styles.separator2} />
        <TouchableOpacity
          style={styles.addToDB}
          title="Submit Activity"
          onPress={() => {
            let valid = false;
            valid = checkInputs(
              name,
              category,
              userId,
              _values.hours,
              _values.mins,
              _values.rating
            );
            if (valid) {
              submitActivity(
                name,
                category,
                userId,
                _values.hours,
                _values.mins,
                _values.rating,
                userName,
                setUserScore,
                userActivities,
                setUserActivities,
                setUserTrophies
              );
              navigation.goBack(null);
            } else {
              Alert.alert("Error Logging Activity", "Please try again", [
                {
                  text: "Go Back",
                  onPress: () => navigation.goBack(null),
                  style: "cancel",
                },
                { text: "Try Again" },
              ]);
            }
          }}
        >
          <Text style={styles.buttonTextSubmit}>Submit Activity</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddActivityModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  category: {
    paddingTop: 10,
    fontSize: 15,
  },
  separator1: {
    marginVertical: 20,
    height: 1,
    height: "5%",
  },
  separator2: {
    marginVertical: 30,
    height: 1,
    height: "5%",
  },
  time: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    height: 100,
    paddingTop: "10%",
  },
  label: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputWrap: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
  },
  inputWrap2: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    marginLeft: "10%",
  },
  inputHours: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    width: "80%",
    fontSize: 20,
    textAlign: "center",
  },
  inputMins: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    width: "80%",
    fontSize: 20,
    textAlign: "center",
  },
  addToDB: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "10%",
    backgroundColor: "#1CB8AE",
    borderRadius: 50,
  },
  buttonTextSubmit: {
    color: "white",
    fontSize: 25,
  },
});
