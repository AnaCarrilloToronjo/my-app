import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import AddRestaurant from "./AddRestaurant";
import Cities from "./Cities";
import City from "./City";

const options = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "yellow"
    }
  }
};

const CitiesNav = createStackNavigator(
  {
    Cities: { screen: Cities },
    City: { screen: City }
  },
  options
);

const Tabs = createBottomTabNavigator({
  Cities: { screen: CitiesNav },
  AddRestaurant: { screen: AddRestaurant }
});
export default createAppContainer(Tabs);
