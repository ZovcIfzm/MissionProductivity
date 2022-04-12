import { collection, addDoc } from "firebase/firestore"; 
import db from "../../firebase.js";

export default async function submitActivity(name, category, ID, hours, mins, rating) {
    ID = parseInt(ID);
    hours = parseInt(hours);
    mins = parseInt(mins);
    rating = parseInt(rating);
    console.log(name);
    console.log(category);
    console.log(hours);
    console.log(mins);
    console.log(rating);
    if ((!(hours === 0)) || (!(mins === 0)) && (name) && (!(category == null))) {
        await addDoc(collection(db, "activities"), {
            category: category,
            minutes: (hours * 60) + mins,
            name: name,
            rating: rating,
            userID: ID
        });
        return true;
    }
    else {
        return false;
    }
}