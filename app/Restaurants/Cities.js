import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";

export default class Cities extends Component {
  static navigationsOptions = {
    title: "Restaurants",
    headerTitleStyle: {
      color: "white",
      fontSize: 20,
      fontWeight: "400"
    }
  };
  navigate = item => {
    this.props.navigation.navigate("City", { city: item });
  };
  render() {
    const {
      screenProps: { cities }
    } = this.props;
    return (
      <ScrollView contentContainerStyle={[!cities.length && { flex: 1 }]}>
        <View style={[!cities.length && { justifyContent: "center", flex: 1 }]}>
          {cities.map((item, index) => (
            <TouchableWithoutFeedback
              onPress={() => this.navigate(item)}
              key={index}
            >
              <View style={styles.cityContainer}>
                <Text style={styles.city}> {item.city} </Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "pink"
  },
  city: {
    fontSize: 20
  },
  country: {
    color: "rgba(0,0,0, .5)"
  }
});
