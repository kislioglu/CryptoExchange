import {View, Text} from 'react-native';
import React from 'react';
import CoinCurrencyGraphics from '../../CoinCurrencyGraphics';
import ChartTrades from './Trades/ChartTrades';

export default function Chart({isValidData, spark}) {
  return (
    <View>
      <CoinCurrencyGraphics isValidData={isValidData} spark={spark} />
      <ChartTrades />
    </View>
  );
}
