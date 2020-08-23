import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, Dimensions } from "react-native";

import Photos from "./app/Photos";

export default class ImageGallery extends Component {
  render() {
    return (
      <View>
        <Photos></Photos>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#eee"
  },
  imagewrap: {
    padding: 1,
    height: Dimensions.get("window").height / 3 - 12,
    width: Dimensions.get("window").width / 2 - 4,
    backgroundColor: "#fff"
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "rgba(0,0,0,0.9)"
  },
  text: {
    color: "#fff"
  },
  scrollView: {
    flexDirection: "column"
  },
  content: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center"
  },
  textContent: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#f8f8ff",
    fontSize: 20,
    padding: 15
  }
});

AppRegistry.registerComponent("ImageGallery", () => ImageGallery);
