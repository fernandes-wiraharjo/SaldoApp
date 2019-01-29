import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Thankyou extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { saldoTerbaru } = this.props.navigation.state.params;

    return (
      <View>
        <Text>Saldo Terbaru Anda Rp. {saldoTerbaru}</Text>
        <Text>Terima kasih</Text>
        <TouchableOpacity
          style={{ backgroundColor: "green", borderRadius: 10 }}
          onPress={() => this.props.navigation.popToTop()}
        >
          <Text style={{ margin: 20, fontSize: 25, color: "white" }}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Thankyou;
