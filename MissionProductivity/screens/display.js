import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";

import { Context } from "../context.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "../firebase.js";

function NameList() {
    
    const { userName, userId } = React.useContext(Context);

    const [data, setData] = useState();
    const tempData = [];

    const q = query(collection(db, "scores"), where('userID', '==', userId));

    onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            score: data.score,
        };
    });
        tempData.push(results[0].score);
        setData(tempData);
    });

    const nameList = tempData.map(name => <Text> {name} </Text>);
    return <Text style={{ color:"#000000"}}> {nameList} </Text>

}

export default NameList