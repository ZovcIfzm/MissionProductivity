import { TabRouter } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Text, View, Platform, StyleSheet, TextInput, Button, Animated } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import { route } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import submitActivity from '../components/AddActivity/submitActivity.js';
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
  const cat = ["Mental", "Physical", "Both", "Other"]
  const items = [
    {id: 1, name: 'Mental'},
    {id: 2, name: 'Physical'},
    {id: 3, name: 'Both'},
    {id: 4, name: 'Other'},
  ];

  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <TextInput style={styles.inputName}
                 placeholder="Name"
                 onChangeText={(val) => _values.name = val}  
        /> 
        <SelectDropdown
          data={cat}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
            _values.category = selectedItem;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />

      <View style={styles.separator} />
      <View style={styles.time}>
        <View style={styles.inputWrap}>
            <Text style={styles.label} >Hours</Text>
            <TextInput style={styles.inputHours}
                 keyboardType='numeric'
                 placeholder="0"
                 maxLength={2}
                 onChangeText={(val) => _values.hours = val}  
            />
        </View>

        <View style={styles.inputWrap2}>
            <Text style={styles.label}>Minutes</Text>
            <TextInput style={styles.inputMins}
                 keyboardType='numeric'
                 placeholder="00"
                 maxLength={2} 
                 onChangeText={(val) => _values.mins = val}  
            />
        </View>
      </View>
      <View style={styles.separator} />
      <AirbnbRating
        showRating
        startingValue={(val) => _values.rating = val}
        onStartRating={(val) => _values.rating = val}
        onFinishRating={(val) => _values.rating = val}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Button
        style={styles.submitButton}
        title="Submit Activity"
        onPress={() => {let submitted = submitActivity(_values.name, _values.category, 0, _values.hours, _values.mins, _values.rating); if(submitted) {navigation.goBack(null)}}}
        ></Button>
    </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  category: {
    paddingTop: 10,
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
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
    fontSize: 15,
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
  },
  inputMins: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    width:"80%",
  },
  inputName: {
    backgroundColor: '#D3D3D3',
    width: "50%",
  },
  drop: {
    width: "50%",
    paddingLeft: '25%',
  }
});
