import React, {useEffect, useState} from 'react';

import {View} from 'react-native';

import {firebase} from '../firebase';

import Scoreboard from "../components/scoreboard"

const LeaderboardScreen = () => {
  useEffect(() => {
    firebase.firestore().
  }, []);
  

  [scores, setScores] = useState()

  return <View>
    <Scoreboard scores={scores}/>
  </View>;
};

export default LeaderboardScreen;
