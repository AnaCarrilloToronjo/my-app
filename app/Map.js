import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SearchBar } from "react-native-elements";

Geocoder.init("AIzaSyDqAYganIMtCeu7_QlDEcTjesA2OYdncok");

Geocoder.from("Colosseum")
  .then(json => {
    var location = json.results[0].geometry.location;
    console.log("Colosseum");
    console.log(location);
  })
  .catch(error => console.warn(error));

const initialRegion = {
  latitude: 41.8962667,
  longitude: 11.3340056,
  latitudeDelta: 40,
  longitudeDelta: 40
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      data => resolve(data.coords),
      err => reject(err)
    );
  });
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      location: ""
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    console.log(e);
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate
          //key: coordinate
        }
      ]
    });
  }
  hadleLocationInput(text) {
    console.log(text);
    this.setState({ location: text });
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          onPress={this.handlePress}
        >
          {this.state.markers.map(marker => {
            return <Marker {...marker} />;
          })}
        </MapView>
        <Callout>
          <View>
            <TextInput
              style={styles.texImput}
              //inlineImageLeft="search_icon"
              placeholder={"New city"}
              onChangeText={text => this.hadleLocationInput({ input: text })}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.getLocation(this.state.location)}
            >
              <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  },
  texImput: {
    flex: 1,
    top: 20,
    width: 350,
    left: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  submitButton: {
    flex: 1,
    width: 60,
    left: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  submitButtonText: {
    flex: 1,
    color: "#daa520"
  }
});
