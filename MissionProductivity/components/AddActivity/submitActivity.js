import { collection, addDoc } from "firebase/firestore";
import { View, StyleSheet, Button, Alert } from "react-native"; 
import db from "../../firebase.js";

export async function submitActivity(name, category, ID, hours, mins, rating) {
    ID = parseInt(ID);
    hours = parseInt(hours);
    mins = parseInt(mins);
    rating = parseInt(rating);
    if (category === 'Both') {
        category = "Mental & Physical Health";
    }
    if (rating === 0) {
        rating = 3;
    }
    //Make name always first letter upper rest lower
    name = titleCase(name);
    //Remove all spaces from name
    name = name.trim();
    //Submit to DB
    await addDoc(collection(db, "activities"), {
        category: category,
        minutes: (hours * 60) + mins,
        name: name,
        rating: rating,
        userID: ID
    });
}

export function checkInputs(name, category, ID, hours, mins, rating) {
    if (((!(hours === 0)) || (!(mins === 0))) && (name) && (!(category === 'Category'))) {
        return true;
    }
    return false;
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

  