import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, CardDetailPage } from "../components/modules/screens";
import NavigationStrings from "../constants/Navigation-Strings";
const Stack = createNativeStackNavigator();
let HomeStack = function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NavigationStrings.Home} component={Home} />
      <Stack.Screen
        name={NavigationStrings.CardDetailPage}
        component={CardDetailPage}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
