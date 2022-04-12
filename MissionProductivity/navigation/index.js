/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import AddActivity from "../screens/AddActivityScreen";
import HomeScreen from "../screens/HomeScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import ModalScreen from "../screens/ModalScreen";
import AddActivityModal from "../screens/AddActivityModal";
import NewActivityModal from "../screens/NewActivityModal";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Log Activity" component={AddActivityModal} options={({navigation}) => ({
          title: "Add Activity",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: "white"
          },
          headerStyle: {
            backgroundColor: '#1CB8AE'
         },
         headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate("AddActivity")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Feather
              name="x-circle"
              size={20}
              color="white"
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
        })}/>
        <Stack.Screen name="New Activity" component={NewActivityModal} options={({navigation}) => ({
          title: "New Activity",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: "white"
          },
          headerStyle: {
            backgroundColor: '#1CB8AE'
         },
         headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate("AddActivity")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Feather
              name="x-circle"
              size={20}
              color="white"
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
        })}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = "light";

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AddActivity"
        component={AddActivity}
        options={({ navigation }) => ({
          title: "Add Activity",
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: "white"
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("New Activity")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <AntDesign
                name="pluscircle"
                size={25}
                color="white"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: '#1CB8AE'
         }
        })}
      />
    </BottomTab.Navigator>
  );
}
//navigation.navigate("New Activity")
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
