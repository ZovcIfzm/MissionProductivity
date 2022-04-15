import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import db from "./firebase.js";

const Context = React.createContext();

const Provider = (props) => {
  const [scores, setScores] = useState([]);
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [userScore, setUserScore] = useState(0);
  const [userActivities, setUserActivities] = useState([]);
  const [userTrophies, setUserTrophies] = useState([
    {
      t_100: false,
      t_200: false,
      t_300: false,
      t_400: false,
      t_500: false,
      t_600: false,
      t_700: false,
      t_800: false,
      t_900: false,
    },
  ]);

  const resetSavedUser = () => {
    setUserScore(0);
    setUserActivities([]);
    setUserTrophies([
      {
        t_100: false,
        t_200: false,
        t_300: false,
        t_400: false,
        t_500: false,
        t_600: false,
        t_700: false,
        t_800: false,
        t_900: false,
      },
    ]);
  };

  //Get all users' scores (top 10)
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

  // Get userScore
  useEffect(async () => {
    const docRef = doc(db, "scores", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists) {
      const data = docSnap.data();
      setUserScore(data.score);
    }
  }, [user]);

  return (
    <Context.Provider
      value={{
        scores: scores,
        user: user,
        setUser: setUser,
        userId: userId,
        setUserId: setUserId,
        userEmail: userEmail,
        setUserEmail: setUserEmail,
        userName: userName,
        setUserName: setUserName,
        userScore: userScore,
        setUserScore: setUserScore,
        userActivities: userActivities,
        setUserActivities: setUserActivities,
        userTrophies: userTrophies,
        setUserTrophies: setUserTrophies,
        resetSavedUser: resetSavedUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
