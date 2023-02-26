import * as React from "react";
import { View, Text } from "react-native";
import Routes from "./src/navigation/routes";
import "react-native-gesture-handler";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}

export default App;
