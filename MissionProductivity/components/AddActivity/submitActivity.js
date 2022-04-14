import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase.js";
import React from 'react';
import { Context } from "../../context.js";

export async function submitActivity(name, category, ID, hours, mins, rating) {
    const { userName } = React.useContext(Context);
    hours = parseInt(hours);
    mins = parseInt(mins);
    let minutes = 0;
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

    //Find total minutes
    let minutes_total = minutes;
    const mins_query = query(collection(db, "activities"), where('userId', 'in', [ID]));
    onSnapshot(mins_query, (querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          mins: data.minutes,
        };
      });
      for (let i = 0; i < results.length; i++) {
        minutes_total += results[i];
      }
    });

    //Find Score
    let score_new = 0;
    const score_query = query(collection(db, "scores"), where('userID', '==', ID));
    onSnapshot(score_query, (querySnapshot) => {
        const results2 = querySnapshot.docs.map((doc) => {
          const data2 = doc.data();
          return {
            score: data2.score,
          };
        });
        score_new = results2;
    });

    //Write new score
    score_new = score_new + (0.5 * minutes_total);

    //unlock trophy
    let t_100 = false;
    let t_200 = false;
    let t_300 = false;
    let t_400 = false;
    let t_500 = false;
    let t_600 = false;
    let t_700 = false;
    let t_800 = false;
    let t_900 = false;

    if (score_new > 100) {
        t_100 = true;
    }
    if (score_new > 200) {
        t_200 = true;
    }
    if (score_new > 300) {
        t_300 = true;
    }
    if (score_new > 400) {
        t_400 = true;
    }
    if (score_new > 500) {
        t_500 = true;
    }
    if (score_new > 600) {
        t_600 = true;
    }
    if (score_new > 700) {
        t_700 = true;
    }
    if (score_new > 800) {
        t_800 = true;
    }
    if (score_new > 900) {
        t_900 = true;
    }

    await Promise.all([updateScores(score_new, userName, ID), updateTrophies(t_100, t_200, t_300, t_400, t_500, t_600, t_700, t_800, t_900, ID), updateActivity(category, minutes_total, name, rating, ID)]);

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

async function updateScores(score, username, ID){
    updateDoc(doc(db, "scores", ID), {
        score: score,
        name: username,
        userID: ID
    });
  }
  
async function updateTrophies(t_100, t_200, t_300, t_400, t_500, t_600, t_700, t_800, t_900, ID){
    updateDoc(doc(db, "trophies", ID), {
        100: t_100,
        200: t_200,
        300: t_300,
        400: t_400,
        500: t_500,
        600: t_600,
        700: t_700,
        800: t_800,
        900: t_900,
    });
  }
  
async function updateActivity(category, minutes, name, rating, ID){
    addDoc(collection(db, "activities"), {
        category: category,
        minutes: minutes,
        name: name,
        rating: rating,
        userId: ID
    });
  }