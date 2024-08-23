import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {marketTradesStaticData} from '../../../../../staticDatas/marketTrades';

export default function ChartTrades() {
  const [tradesData, setTradesData] = useState([]);

  useEffect(() => {
    setTradesData(marketTradesStaticData);
  }, []);

  const reverseHandle = () => {
    setTradesData(prevData => [...prevData].reverse());
  };

  return (
    <View style={styles.container}>
      <View style={styles.tradeDetailsView}>
        <View style={styles.eachtradeDetailView}>
          <TouchableOpacity onPress={reverseHandle}>
            <Text style={styles.titleText}>Time</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eachtradeDetailView}>
          <TouchableOpacity onPress={reverseHandle}>
            <Text style={styles.titleText}>Price</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eachtradeDetailView}>
          <TouchableOpacity onPress={reverseHandle}>
            <Text style={styles.titleText}>Amount</Text>
          </TouchableOpacity>
        </View>
      </View>

      {tradesData.map((tradeData, index) => (
        <View style={styles.tradeDetailsView} key={index}>
          <View style={styles.eachtradeDetailView}>
            <Text>{tradeData.time}</Text>
          </View>
          <View style={styles.eachtradeDetailView}>
            <Text style={{color: '#58BD7D'}}>{tradeData.price}</Text>
          </View>
          <View style={styles.eachtradeDetailView}>
            <Text>{tradeData.amount}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#FCFCFD',
    borderRadius: 10,
    padding: 10,
  },
  tradeDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  eachtradeDetailView: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
  },
});
