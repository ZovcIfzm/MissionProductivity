import { TabRouter } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, Platform, StyleSheet, TextInput, Button } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import { route } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import submitActivity from '../components/AddActivity/submitActivity.js'
import {Keyboard, TouchableWithoutFeedback} from 'react-native'



const AddActivityModal = (props) => {
  const name = props.route.params.name;
  const category = props.route.params.category;
  const _values = {
    hours: 0,
    mins: 0,
    rating: 0
  } 
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
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
        onPress={() => {submitActivity(name, category, 0, _values.hours, _values.mins, _values.rating); navigation.goBack(null)}}
        ></Button>
    </View>
    </TouchableWithoutFeedback>
  );
}


export default AddActivityModal;


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
  }
});
