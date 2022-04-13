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

  return (
    <Context.Provider value={{ scores: scores }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };