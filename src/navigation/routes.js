import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationStrings from "../constants/Navigation-Strings";
import MainRoutes from "./mainRoutes";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

let Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationStrings.Home}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2A5ADF",
          tabBarInactiveTintColor: "#D4D7DF",
          tabBarShowLabel: false,
        }}
      >
        <Stack.Group>{MainRoutes(Stack)}</Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
