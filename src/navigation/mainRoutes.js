import React from "react";
import NavigationStrings from "../constants/Navigation-Strings";
import TabRoutes from "./tabRoutes";

import { CardDetailPage, UserProfilePage } from "../components/modules/screens";
export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.Tabs} component={TabRoutes} />
      <Stack.Screen
        name={NavigationStrings.CardDetailPage}
        component={CardDetailPage}
      />
      <Stack.Screen
        name={NavigationStrings.UserProfilePage}
        component={UserProfilePage}
      />
    </>
  );
}
