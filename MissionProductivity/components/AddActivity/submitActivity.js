import { collection, addDoc } from "firebase/firestore";
import { View, StyleSheet, Button, Alert } from "react-native"; 
import db from "../../firebase.js";
import React from 'react';

export async function submitActivity(name, category, ID, hours, mins, rating) {
    hours = parseInt(hours);
    mins = parseInt(mins);
    
    if(isNaN(mins) && isNaN(hours)) {
        minutes =  0;
    }
    else if(isNaN(mins)) {
        minutes =  (hours * 60);
    }
    else if(isNaN(hours)) {
        minutes =  mins;
    }
    else {
        minutes = (hours * 60) + mins;
    }
    
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
        userId: ID
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

  