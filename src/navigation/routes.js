import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, User } from "../components/modules/screens";
import TabRoutes from "./tabRoutes";
import NavigationStrings from "../constants/Navigation-Strings";
import MainRoutes from "./mainRoutes";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

let Routes = function () {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabRoutes} />
        <Drawer.Screen name="User" component={User} />
      </Drawer.Navigator>

      {/* <Stack.Navigator
        initialRouteName={NavigationStrings.Home}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2A5ADF",
          tabBarInactiveTintColor: "#D4D7DF",
          tabBarShowLabel: false,
        }}
      >
        <Stack.Group>{MainRoutes(Stack)}</Stack.Group>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Routes;
