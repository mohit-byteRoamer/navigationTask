import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { User, UserProfilePage } from "../components/modules/screens";
import TabRoutes from "./tabRoutes";

const Drawer = createDrawerNavigator();

let Routes = function () {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabRoutes} />
        <Drawer.Screen name="User" component={User} />
        <Drawer.Screen name="UserProfile" component={UserProfilePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
