import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const UserProfileCard = ({ onPress, imageUri, name, username, location }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: imageUri }} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>@{username}</Text>
          <Text style={styles.location}>{location}</Text>
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#999",
  },
});

export default UserProfileCard;
