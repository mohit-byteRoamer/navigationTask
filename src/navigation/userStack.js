import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User, UserProfilePage } from "../components/modules/screens";
import NavigationStrings from "../constants/Navigation-Strings";
const Stack = createNativeStackNavigator();
let UserStack = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NavigationStrings.User} component={User} />
      <Stack.Screen
        name={NavigationStrings.UserProfilePage}
        component={UserProfilePage}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
