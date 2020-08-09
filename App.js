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

import { createAppContainer } from "react-navigation";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import MapView, { Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Photos from "./app/Photos";

const initialRegion = {
  latitude: 41.8962667,
  longitude: 11.3340056,
  latitudeDelta: 40,
  longitudeDelta: 40
};

function renderRandomMarkers(n) {
  const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion;
  return new Array(n).fill().map((x, i) => (
    <Marker
      key={i}
      coordinate={{
        latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
        longitude: longitude + (Math.random() - 0.5) * longitudeDelta
      }}
    />
  ));
}

class HamburgerIcon extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png"
            }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class Home_Screen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  gotoNextActivity = () => {
    this.props.navigation.navigate("Second");
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
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
        </Callout>
      </View>
    );
  }
}

class Settings_Screen extends Component {
  static navigationOptions = {
    title: "Photos"
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Photos style={styles.imagewrap}></Photos>
      </View>
    );
  }
}

class Gastronomy_Screen extends Component {
  static navigationOptions = {
    title: "Gastronomy"
  };

  render() {
    return <View style={styles.MainContainer}></View>;
  }
}

class Student_Screen extends Component {
  static navigationOptions = {
    title: "Student"
  };

  gotoNextActivity = () => {
    this.props.navigation.navigate("Forth");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Student Screen Activity.</Text>

        <Button onPress={this.gotoNextActivity} title="Open Details Activity" />
      </View>
    );
  }
}

class Details_Screen extends Component {
  static navigationOptions = {
    title: "Details Screen"
  };

  gotoNextActivity = () => {
    this.props.navigation.navigate("Second");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Details Screen Activity.</Text>
      </View>
    );
  }
}

export const Tab_1 = createMaterialTopTabNavigator(
  {
    First: {
      screen: Home_Screen
    },
    Second: {
      screen: Settings_Screen
    },
    Third: {
      screen: Gastronomy_Screen
    }
  },
  {
    tabBarPosition: "top",

    swipeEnabled: true,

    tabBarOptions: {
      activeTintColor: "#fff",
      pressColor: "#004D40",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#00B8D4"
      },

      labelStyle: {
        fontSize: 16,
        fontWeight: "200"
      }
    }
  }
);

export const Tab_2 = createMaterialTopTabNavigator(
  {
    Third: {
      screen: Student_Screen
    },
    Forth: {
      screen: Details_Screen
    }
  },
  {
    tabBarPosition: "top",

    swipeEnabled: true,

    tabBarOptions: {
      activeTintColor: "#fff",
      pressColor: "#004D40",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#00B8D4"
      },

      labelStyle: {
        fontSize: 16,
        fontWeight: "200"
      }
    }
  }
);

const First_2_Tabs = createStackNavigator({
  First: {
    screen: Tab_1,
    navigationOptions: ({ navigation }) => ({
      title: "First Screen",
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#00B8D4",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      },
      headerTintColor: "#fff"
    })
  }
});

const Second_2_Tabs = createStackNavigator({
  First: {
    screen: Tab_2,
    navigationOptions: ({ navigation }) => ({
      title: "Second Screen",
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#00B8D4",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      },
      headerTintColor: "#fff"
    })
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home_Menu_Label: {
    screen: First_2_Tabs
  },

  Student_Menu_Label: {
    screen: Second_2_Tabs
  }
});

export default createAppContainer(MyDrawerNavigator);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5fcff"
  },

  text: {
    fontSize: 22,
    color: "#000",
    textAlign: "center",
    marginBottom: 10
  },
  imagewrap: {
    padding: 1,
    height: Dimensions.get("window").height / 3 - 12,
    width: Dimensions.get("window").width / 2 - 4,
    backgroundColor: "#fff"
  },

  container: {
    flex: 1
  },
  map: {
    width: "100%",
    height: "100%"
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 20,
    flex: 1
  },
  calloutSearch: {
    borderColor: "transparent",
    width: 300, //Dimensions.get("window").height,
    height: 40,
    borderWidth: 0.0
  }
});
