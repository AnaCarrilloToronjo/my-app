import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  Header
} from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";

import ImageElement from "./ImageElement";
import NavBar from "./Navbar";

export default class GastronomyPhotos extends Component {
  state = {
    modalVisible: false,
    modalImage: require("./gastronomyimg/hamburguer.jpg"),
    images: [
      require("./gastronomyimg/hamburguer.jpg"),
      require("./gastronomyimg/cuscus.jpg"),
      require("./gastronomyimg/musaka.jpg"),
      require("./gastronomyimg/chickenCurry.jpg")
    ]
  };
  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }
  getImage() {
    return this.state.modalImage;
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => {
            this.setModalVisible(true, key);
          }}
        >
          <View style={styles.imagewrap}>
            <ImageElement imgsource={val}></ImageElement>
          </View>
        </TouchableWithoutFeedback>
      );
    });
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Modal
            style={styles.modal}
            animationType={"fade"}
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={styles.modal}>
              <Text
                style={styles.text}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                Close
              </Text>
              <ImageElement imgsource={this.state.modalImage}></ImageElement>
            </View>
          </Modal>
          {images}
        </View>
      </ScrollView>
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
