import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../components/AddActivity/List";
import SearchBar from "../components/AddActivity/SearchBar";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "../firebase.js";

export default function Home({ navigation }) {
  //Inital Values
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  const tempData = [];

  useEffect(() => {
    const q = query(collection(db, "activities"));
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
        }
        else {
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
      setData(tempData);
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
      {!data ? (
        <ActivityIndicator size="large" />
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={data}
            setClicked={setClicked}
          />
        
      )}
    </SafeAreaView>
  );
};

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



//TODO:
//Design (info icon, x icons, modal design, input database, submitted modal)
//Figure our who is logged in