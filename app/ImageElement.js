import React, { Component } from "react";
import { AppRegistry, StyleSheet, Image } from "react-native";

export default class ImageElement extends Component {
  render() {
    return <Image source={this.props.imgsource} style={styles.Image}></Image>;
  }
}
const styles = StyleSheet.create({
  Image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
