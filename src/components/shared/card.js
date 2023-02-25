import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ onPress, title, description }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 16,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Card;
