import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Header from "../widgets/header/index.js";

const UserProfilePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        headerLabel={"UserProfilePage"}
      />
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg",
          }}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Mohit</Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Details</Text>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>mohit878421@example.com</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Phone:</Text>
          <Text style={styles.detailValue}>8847355729</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Address:</Text>
          <Text style={styles.detailValue}>Near Railway Road, Mansa</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nameContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  detailsContainer: {
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detail: {
    flexDirection: "row",
    marginBottom: 8,
  },
  detailLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  detailValue: {
    flex: 2,
    fontSize: 16,
  },
});

export default UserProfilePage;
