import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.textCenter}>Photos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "#f08080"
  },
  textCenter: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#f8f8ff",
    fontSize: 20,
    fontFamily: "MountainsofChristmas-Regular"
  }
});
