import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from "react-native";

import List from "../components/AddActivity/List";
import SearchBar from "../components/AddActivity/SearchBar";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "../firebase.js";
import { Context } from "../context.js";

export default function AddActivity({ navigation }) {
  //Inital Values
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const { userId, userActivities, setUserActivities } =
    React.useContext(Context);

  useEffect(() => {
    const tempData = [];
    const q = query(
      collection(db, "activities"),
      where("userId", "in", ["-1", userId])
    );
    onSnapshot(q, (querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          category: data.category,
          name: data.name,
        };
      });
      for (let i = 0; i < results.length; i++) {
        let found = false;
        if (tempData.length === 0) {
          tempData.push(results[i]);
        } else {
          for (let j = 0; j < tempData.length; j++) {
            if (results[i].name === tempData[j].name) {
              found = true;
            }
          }
          if (!found) {
            tempData.push(results[i]);
          }
        }
      }
      //Alphabetically order tempData
      tempData.sort(function (a, b) {
        return compareStrings(a.name, b.name);
      });
      setUserActivities(tempData);
    });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!userActivities ? (
        <ActivityIndicator size="large" />
      ) : (
        <List
          searchPhrase={searchPhrase}
          data={userActivities}
          setClicked={setClicked}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}
