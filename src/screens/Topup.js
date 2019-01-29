import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { hitungTotalSaldo } from '../actions/index'

class Topup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountFromUser: "0"
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { saldoTerkini } = this.props.navigation.state.params;
    return (
      <View>
        <Text style={{ fontSize: 25 }}>Saldo terkini: Rp {saldoTerkini}</Text>
        <TextInput
          keyboardType={"number-pad"}
          placeholder="Masukkan jumlah yang ingin anda top up"
          onChangeText={saldoPenambahan =>
            this.setState({ amountFromUser: saldoPenambahan })
          }
        />
        <TouchableOpacity
          style={{ backgroundColor: "green", borderRadius: 10 }}
          onPress={() => this.props.dispatch(hitungTotalSaldo(saldoTerkini, this.state.amountFromUser))}
        >
          <Text style={{ margin: 20, fontSize: 25, color: "white" }}>Pay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Topup);
