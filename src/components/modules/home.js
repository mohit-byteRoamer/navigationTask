import * as React from "react";
import { View, Text } from "../widgets/widgets";
import Card from "../shared/card";
function Home({ navigation }) {
  return (
    <View>
      <Card
        onPress={() => navigation.navigate("CardDetailPage")}
        title="DeftSoft"
        description="Programming Ideas"
      />
    </View>
  );
}

export default Home;
