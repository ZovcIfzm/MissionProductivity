import { TabRouter } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Text, View, Platform, StyleSheet, TextInput, Button, Animated, TouchableOpacity, Alert } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import { route } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import {submitActivity, checkInputs} from '../components/AddActivity/submitActivity.js';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function NewActivityModal() {
  const _values = {
    hours: 0,
    mins: 0,
    rating: 0,
    name: '',
    category: 'Category'
  }  
  const cat = ["Mental Health", "Physical Health", "Both", "Other"];

  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <TextInput style={styles.inputName}
                 placeholder="Activity"
                 placeholderTextColor = "black"
                 onChangeText={(val) => _values.name = val}  
        /> 
        <SelectDropdown
          data={cat}
          defaultButtonText="Category"
          onSelect={(selectedItem, index) => {
            _values.category = selectedItem;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.catButton}
          buttonTextStyle={styles.catButtonText}
        />

      <View style={styles.separator1} />
      <View style={styles.time}>
        <View style={styles.inputWrap}>
            <Text style={styles.label} >Hours</Text>
            <TextInput style={styles.inputHours}
                 keyboardType='numeric'
                 placeholder="0"
                 maxLength={2}
                 placeholderTextColor = "black"
                 onChangeText={(val) => _values.hours = val}  
            />
        </View>

        <View style={styles.inputWrap2}>
            <Text style={styles.label}>Minutes</Text>
            <TextInput style={styles.inputMins}
                 keyboardType='numeric'
                 placeholderTextColor = "black"
                 placeholder="0"
                 onChangeText={(val) => _values.mins = val}  
            />
        </View>
      </View>
      <View style={styles.separator1} />
      <AirbnbRating
        showRating
        startingValue={(val) => _values.rating = val}
        onStartRating={(val) => _values.rating = val}
        onFinishRating={(val) => _values.rating = val}
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
            let valid = checkInputs(_values.name, _values.category, 0, _values.hours, _values.mins, _values.rating);
            if (valid) {
              submitActivity(_values.name, _values.category, 0, _values.hours, _values.mins, _values.rating);
              navigation.goBack(null); 
            }
            else {
              console.log(valid);
              createTwoButtonAlert;
            }
          }}
      >
            <Text style={styles.buttonTextSubmit}>Submit Activity</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}

//TODO, get logged in user

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50
  },
  inputName: {
    backgroundColor: '#D3D3D3',
    width: "70%",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  separator1: {
    marginVertical: 20,
    height: 1,
    height: "5%",
  },
  separator2: {
    marginVertical: 20,
    height: 1,
    height: "5%",
  },
  time: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: "80%",
    height: 100,
    paddingTop: "10%"
  },
  label: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    width: "40%"
  },
  inputWrap2: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    width: "40%",
    marginLeft: "10%"
  },
  inputHours: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    width:"80%",
    fontSize: 20,
    textAlign: "center",
  },
  inputMins: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    width:"80%",
    fontSize: 20,
    textAlign: "center",
  },
  addToDB: {
    alignItems:'center',
    justifyContent:'center',
    width: "60%",
    height: "10%",
    backgroundColor:'#1CB8AE',
    borderRadius:50,
  },
  catButton: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
    width: "40%",
    height: "5%",
    backgroundColor:'#D3D3D3',
  },
  catButtonText: {
    fontSize: 15,
  },
  buttonTextSubmit: {
    color: "white",
    fontSize:25,
  },
});
