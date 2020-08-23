import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class City extends Component {
  static navigationOptions = props => {
    const { city } = props.navigation.state.params;
    return {
      title: city.city,
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: 400
      }
    };
  };
  state = {
    name: "",
    info: ""
  };
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  addLocation = () => {
    if (this.state.name === "" || this.state.info === "") return;
    const { city } = this.props.navigation.state.params;
    const location = {
      name: this.state.name,
      info: this.state.info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({ name: "", info: "" });
  };
  render() {
    const { city } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={[!city.locations.length && { flex: 1 }]}
        >
          <View
            style={[
              styles.locationsContainer,
              !city.locations.length && { flex: 1, justifyContent: "center" }
            ]}
          >
            {!city.locations.length}
            {city.locations.map((location, index) => (
              <View key={index} style={styles.locationContainer}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationInfo}>{location.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TextInput
          onChangeText={val => this.onChangeText("name", val)}
          placeholder="Location name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={val => this.onChangeText("info", val)}
          placeholder="Location info"
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  heading: {
    color: "white",
    fontSize: 40,
    marginBottom: 10,
    alignSelf: "center"
  },
  buttonContainer: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "center"
  },
  container: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "center"
  },
  input: {
    margin: 10,
    backgroundColor: "gray",
    paddingHorizontal: 8,
    height: 50
  },
  input2: {
    margin: 10,
    backgroundColor: "gray",
    paddingHorizontal: 8,
    height: 50
  },
  imputMedia: {
    margin: 10,
    backgroundColor: "green",
    paddingHorizontal: 8,
    height: 50
  },
  locationName: {
    color: "blue"
  },
  locationInfo: {
    color: "blue"
  },
  locationContainer: {
    flex: 1,
    color: "blue"
  },
  locationsContainer: {
    flex: 1,
    color: "white"
  }
});
