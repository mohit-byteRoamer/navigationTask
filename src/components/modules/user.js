import * as React from "react";
import { View, Text } from "../widgets/widgets";
import UserProfileCard from "../shared/userProfileCard";
function User({ navigation }) {
  return (
    <View>
      <UserProfileCard
        onPress={() => navigation.navigate("UserProfilePage")}
        imageUri="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
        name="Mohit"
        username="mohit878"
        location="Mansa, India"
      />
    </View>
  );
}

export default User;
