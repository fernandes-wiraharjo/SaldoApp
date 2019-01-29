import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountSaldo: 2000000
    };
  }

  static navigationOptions = {
    title: "Home Page"
  };

  render() {
    const { amountSaldo } = this.state;
    return (
      <View>
        <Text style={{ fontSize: 25 }}>Saldo anda Rp. {amountSaldo}</Text>
        <TouchableOpacity
          style={{ backgroundColor: "green", borderRadius: 10 }}
          onPress={() =>
            this.props.navigation.navigate("TopupPage", {
              saldoTerkini: amountSaldo
            })
          }
        >
          <Text style={{ margin: 20, fontSize: 25, color: "white" }}>
            Top Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
