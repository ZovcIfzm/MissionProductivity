import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const TrophyDisplay = (props) => {
  return (
    <View style={styles.container}>
      {props.trophies.map((item, index) => {
          return (
            <View key={index}>
              {item.streak_lvl_1 ? (
                <Image source={require('../../assets/images/streak-1.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/streak-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.streak_lvl_2 ? (
                <Image source={require('../../assets/images/streak-2.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/streak-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.streak_lvl_3 ? (
                <Image source={require('../../assets/images/streak-3.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/streak-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.fitness_lvl_1 ? (
                <Image source={require('../../assets/images/fit-1.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/fit-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.fitness_lvl_2 ? (
                <Image source={require('../../assets/images/fit-2.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/fit-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.fitness_lvl_3 ? (
                <Image source={require('../../assets/images/fit-3.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/fit-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.mental_lvl_1 ? (
                <Image source={require('../../assets/images/mental-1.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/mental-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.mental_lvl_2 ? (
                <Image source={require('../../assets/images/mental-2.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/mental-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
              {item.mental_lvl_3 ? (
                <Image source={require('../../assets/images/mental-3.png')} style={{width: 100 , height: 100 }}/>
              ) : (
                <Image source={require('../../assets/images/mental-locked.png')} style={{width: 100 , height: 100 }}/>
              )}
            </View>
          );
        })}
    </View>
  );
};

export default TrophyDisplay;
