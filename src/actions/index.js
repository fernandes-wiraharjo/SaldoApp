export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const HITUNG_SALDO = "Hitung_SALDO"
export const hitungTotalSaldo = (saldoTerkini, saldoPenambahan) => {
  const result = saldoTerkini + parseInt(saldoPenambahan);
  // this.props.navigation.navigate("ThankyouPage", {
  //   saldoTerbaru: result
  // });
  return {
    type: HITUNG_SALDO,
    payload: result
  }
};
