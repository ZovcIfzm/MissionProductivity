import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import db from "./firebase.js";

const Context = React.createContext();

const Provider = (props) => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "scores"), orderBy("score", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          name: data.name,
          score: data.score,
        };
      });
      setScores(results);
    });
  }, []);

  // This is a temporary hard-coded datastructure to mock up
  // the user's unlocked trophies.
  // Not sure how to look up queries in the database
  const [trophies, setTrophies] = useState([
    {
      streak_lvl_1: true,
      streak_lvl_2: true,
      streak_lvl_3: false,
      fitness_lvl_1: true,
      fitness_lvl_2: true,
      fitness_lvl_3: false,
      mental_lvl_1: true,
      mental_lvl_2: false,
      mental_lvl_3: false
    }
  ]);

  return (
    <Context.Provider value={{ scores: scores, trophies: trophies }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
