import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { View, Text } from "../widgets";

const Header = function (props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.backButtonBox}>
          <Image
            style={styles.backIconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2732/2732652.png",
            }}
          />
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.headerLabel}>{props.headerLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  backButtonBox: {
    marginRight: 10,
    marginLeft: 5,
    width: 35,
    height: 35,
  },
  backIconStyle: {
    width: "100%",
    height: "100%",
  },
  headerLabel: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Header;
