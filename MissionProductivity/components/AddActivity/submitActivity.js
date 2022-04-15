import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import db from "../../firebase.js";

export async function submitActivity(
  name,
  category,
  userId,
  hours,
  mins,
  rating,
  userName,
  setUserScore,
  userActivities,
  setUserActivities,
  setUserTrophies
) {
  hours = parseInt(hours);
  mins = parseInt(mins);

  let minutes = 0;
  if (isNaN(mins) && isNaN(hours)) {
    minutes = 0;
  } else if (isNaN(mins)) {
    minutes = hours * 60;
  } else if (isNaN(hours)) {
    minutes = mins;
  } else {
    minutes = hours * 60 + mins;
  }

  rating = parseInt(rating);
  if (category === "Both") {
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

  //Find Score
  let score_new = 0;

  const docRef = doc(db, "scores", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    score_new = data.score;
  }

  //Write new score
  score_new = score_new + 0.5 * minutes_total;

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

  setUserScore(score_new);
  setUserActivities([
    ...userActivities,
    {
      category: category,
      minutes: minutes,
      name: name,
      rating: rating,
      userId: userId,
    },
  ]);

  setUserTrophies([
    {
      t_100: t_100,
      t_200: t_200,
      t_300: t_300,
      t_400: t_400,
      t_500: t_500,
      t_600: t_600,
      t_700: t_700,
      t_800: t_800,
      t_900: t_900,
    },
  ]);
  await Promise.all([
    updateScores(score_new, userName, userId),
    updateTrophies(
      t_100,
      t_200,
      t_300,
      t_400,
      t_500,
      t_600,
      t_700,
      t_800,
      t_900,
      userId
    ),
    updateActivity(category, minutes_total, name, rating, userId),
  ]);
}

export function checkInputs(name, category, userId, hours, mins, rating) {
  if ((!(hours === 0) || !(mins === 0)) && name && !(category === "Category")) {
    return true;
  }
  return false;
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

async function updateScores(score, username, userId) {
  setDoc(doc(db, "scores", userId), {
    score: score,
    name: username,
    userID: userId,
  });
}

async function updateTrophies(
  t_100,
  t_200,
  t_300,
  t_400,
  t_500,
  t_600,
  t_700,
  t_800,
  t_900,
  userId
) {
  setDoc(doc(db, "trophies", userId), {
    t_100: t_100,
    t_200: t_200,
    t_300: t_300,
    t_400: t_400,
    t_500: t_500,
    t_600: t_600,
    t_700: t_700,
    t_800: t_800,
    t_900: t_900,
  });
}

async function updateActivity(category, minutes, name, rating, userId) {
  addDoc(collection(db, "activities"), {
    category: category,
    minutes: minutes,
    name: name,
    rating: rating,
    userID: userId,
  });
}
