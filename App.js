import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/Store";

import Home from "./src/screens/Home";
import Topup from "./src/screens/Topup";
import Thankyou from "./src/screens/Thankyou";

import { createStackNavigator } from "react-navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

//Bikin Router
const Router = createStackNavigator(
  {
    HomePage: {
      screen: Home
    },
    TopupPage: {
      screen: Topup
    },
    ThankyouPage: {
      screen: Thankyou
    }
  },
  {
    initialRouteName: "HomePage"
  }
);

export default App;
