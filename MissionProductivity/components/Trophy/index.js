import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const TrophyDisplay = (props) => {
  useEffect(() => {
    console.log("DEBUG props", props.trophies, props.trophies.length);
  });
  return (
    <View style={styles.container}>
      {props.trophies.length > 0
        ? props.trophies.map((item, index) => {
            return (
              <View style={styles.container_trophy} key={index}>
                {/* <Text style={styles.title}>Streak</Text> */}
                <View style={styles.trophy_row}>
                  <View style={styles.trophy_slot}>
                    {item["t_100"] ? (
                      <Image
                        source={require("../../assets/images/streak-1.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/streak-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Streak Lv1</Text>
                  </View>
                  <View style={styles.trophy_slot}>
                    {item["t_200"] ? (
                      <Image
                        source={require("../../assets/images/streak-2.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/streak-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Streak Lv2</Text>
                  </View>
                  <View style={styles.trophy_slot}>
                    {item["t_300"] ? (
                      <Image
                        source={require("../../assets/images/streak-3.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/streak-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Streak Lv3</Text>
                  </View>
                </View>
                {/* <Text style={styles.title}>Fitness</Text> */}
                <View style={styles.trophy_row}>
                  <View style={styles.trophy_slot}>
                    {item["t_400"] ? (
                      <Image
                        source={require("../../assets/images/fit-1.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/fit-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Fitness Lv1</Text>
                  </View>
                  <View style={styles.trophy_slot}>
                    {item["t_500"] ? (
                      <Image
                        source={require("../../assets/images/fit-2.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/fit-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Fitness Lv2</Text>
                  </View>
                  <View style={styles.trophy_slot}>
                    {item["t_600"] ? (
                      <Image
                        source={require("../../assets/images/fit-3.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/fit-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Fitness Lv3</Text>
                  </View>
                </View>
                {/* <Text style={styles.title}>Mental</Text> */}
                <View style={styles.trophy_row}>
                  <View style={styles.trophy_slot}>
                    {item["t_700"] ? (
                      <Image
                        source={require("../../assets/images/mental-1.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/mental-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Mental Lv1</Text>
                  </View>
                  <View style={styles.trophy_slot}>
                    {item["t_800"] ? (
                      <Image
                        source={require("../../assets/images/mental-2.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/mental-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Mental Lv2</Text>
                  </View>
                  <View style={styles.trophy_slot}>
                    {item["t_900"] ? (
                      <Image
                        source={require("../../assets/images/mental-3.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/mental-locked.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Text>Mental Lv3</Text>
                  </View>
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default TrophyDisplay;
