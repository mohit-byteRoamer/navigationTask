import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Home, User } from "../components/modules/screens";
import HomeStack from "./homeStack";
import UserStack from "./userStack";
import icon from "../constants/icon";
import NavigationStrings from "../constants/Navigation-Strings";

const Tab = createBottomTabNavigator();

let TabRoutes = function () {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2A5ADF",
        tabBarInactiveTintColor: "#D4D7DF",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={NavigationStrings.Home}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? "#2A5ADF" : "#D4D7DF",
                  width: 23,
                  height: 23,
                }}
                source={icon.homeIcon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.User}
        component={UserStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? "#2A5ADF" : "#D4D7DF",
                  width: 23,
                  height: 23,
                }}
                source={icon.userIcon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
