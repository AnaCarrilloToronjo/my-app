import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const initialRegion = {
  latitude: 41.8962667,
  longitude: 11.3340056,
  latitudeDelta: 40,
  longitudeDelta: 40
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate
        }
      ]
    });
  }
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={this.handlePress}
      >
        {this.state.markers.map(marker => {
          return <Marker {...marker} />;
        })}
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
});

/*<MapView style={styles.map} initialRegion={initialRegion}>
          {renderRandomMarkers(2)}
        </MapView>
        <Callout>
          <View style={styles.calloutView}>
            <TextInput
              style={styles.calloutSearch}
              placeholder={"New city"}
              onchangeText={this.hadleLocationInput}
            />
            <Button onPress={this.gotoNextActivity} title="New" />
          </View>
        </Callout>*/
