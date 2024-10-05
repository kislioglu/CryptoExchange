import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Chart from './Chart/Chart';
import OrderBook from './OrderBooks/OrderBook';
import Trades from './Trades/Trades';

export default function Graphics({isValidData, spark}) {
  const [selectedValue, setSelectedValue] = useState('Chart');
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          justifyContent: 'space-between',
          marginTop: 15,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          style={[
            styles.selectBtn,
            selectedValue === 'Chart' ? {backgroundColor: '#e6e8ec'} : null,
          ]}
          onPress={() => setSelectedValue('Chart')}>
          <Text style={styles.selectItemText}>Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.selectBtn,
            selectedValue === 'Order-Books'
              ? {backgroundColor: '#e6e8ec'}
              : null,
          ]}
          onPress={() => setSelectedValue('Order-Books')}>
          <Text style={styles.selectItemText}>Order Books</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.selectBtn,
            selectedValue === 'Trades' ? {backgroundColor: '#e6e8ec'} : null,
          ]}
          onPress={() => setSelectedValue('Trades')}>
          <Text style={styles.selectItemText}>Trades</Text>
        </TouchableOpacity>
      </View>
      {selectedValue === 'Chart' && (
        <Chart isValidData={isValidData} spark={spark} />
      )}
      {selectedValue === 'Order-Books' && <OrderBook />}
      {selectedValue === 'Trades' && <Trades />}
    </View>
  );
}

const styles = StyleSheet.create({
  selectBtn: {
    borderRadius: 25,
    height: 40,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectItemText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
