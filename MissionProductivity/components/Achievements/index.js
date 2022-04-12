import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const TrophyDisplay = (props) => {
  return (
    <View style={styles.container}>
      {props.trophies.map((item, index) => {
          return (
            <View key={index}>
              {item.streak_lvl_1 ? (
                <Text style={styles.trophy}>streak_day_1</Text>
              ) : (
                <Text style={styles.trophy}>!streak_day_1</Text>
              )}
              {item.streak_lvl_2 ? (
                <Text style={styles.trophy}>streak_day_2</Text>
              ) : (
                <Text style={styles.trophy}>!streak_day_2</Text>
              )}
              {item.streak_lvl_3 ? (
                <Text style={styles.trophy}>streak_day_3</Text>
              ) : (
                <Text style={styles.trophy}>!streak_day_3</Text>
              )}
              {item.fitness_lvl_1 ? (
                <Text style={styles.trophy}>fitness_lvl_1</Text>
              ) : (
                <Text style={styles.trophy}>!fitness_lvl_1</Text>
              )}
              {item.fitness_lvl_2 ? (
                <Text style={styles.trophy}>fitness_lvl_2</Text>
              ) : (
                <Text style={styles.trophy}>!fitness_lvl_2</Text>
              )}
              {item.fitness_lvl_3 ? (
                <Text style={styles.trophy}>fitness_lvl_3</Text>
              ) : (
                <Text style={styles.trophy}>!fitness_lvl_3</Text>
              )}
              {item.mental_lvl_1 ? (
                <Text style={styles.trophy}>mental_lvl_1</Text>
              ) : (
                <Text style={styles.trophy}>!mental_lvl_1</Text>
              )}
              {item.mental_lvl_2 ? (
                <Text style={styles.trophy}>mental_lvl_2</Text>
              ) : (
                <Text style={styles.trophy}>!mental_lvl_2</Text>
              )}
              {item.mental_lvl_3 ? (
                <Text style={styles.trophy}>mental_lvl_3</Text>
              ) : (
                <Text style={styles.trophy}>!mental_lvl_3</Text>
              )}
            </View>
          );
        })}
    </View>
  );
};

export default TrophyDisplay;
