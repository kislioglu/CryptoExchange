import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import CryptoRequest from '../../services/ApiRequests';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

export default function CoinCurrencyGraphics({route}) {
  const coinData = CryptoRequest();
  const [coinsInfo, setCoinsInfo] = useState();
  const [spark, setSpark] = useState([]);
  const [matchedCoin, setMatchedCoin] = useState();
  const {coinId} = route.params;
  useEffect(() => {
    if (coinData) {
      const findMatchedCoin = coinData.find(obj => obj.id === coinId);
      if (findMatchedCoin) {
        setMatchedCoin(findMatchedCoin);
      }
    }
  }, [coinData, coinId]);

  useEffect(() => {
    if (matchedCoin) {
      setCoinsInfo(matchedCoin);
    }
  }, [matchedCoin]);

  useEffect(() => {
    if (
      coinsInfo &&
      coinsInfo.sparkline_in_7d &&
      coinsInfo.sparkline_in_7d.price
    ) {
      const sparklineData = coinsInfo.sparkline_in_7d.price.map(
        (price, index) => ({
          x: index,
          y: price,
        }),
      );
      setSpark(sparklineData);
    }
  }, [coinsInfo]);

  const isValidData =
    spark.length > 0 && spark.every(d => !isNaN(d.x) && !isNaN(d.y));
  return (
    <View style={styles.container}>
      {isValidData ? (
        <Chart
          style={{height: 400, width: '90%'}}
          data={spark}
          padding={{left: 40, bottom: 20, right: 20, top: 20}}
          xDomain={{
            min: Math.min(...spark.map(d => d.x)),
            max: Math.max(...spark.map(d => d.x)),
          }}
          yDomain={{
            min: Math.min(...spark.map(d => d.y)),
            max: Math.max(...spark.map(d => d.y)),
          }}
          viewport={{size: {width: 83}}}>
          <VerticalAxis
            tickCount={30}
            theme={{labels: {formatter: v => v.toFixed(1)}}}
          />
          <HorizontalAxis tickCount={6} />
          <Area
            theme={{
              gradient: {
                from: {color: '#ffa502'},
                to: {color: '#ffa502', opacity: 0.4},
              },
            }}
          />
          <Line
            theme={{
              stroke: {color: '#ffa502', width: 5},
              scatter: {default: {width: 4, height: 4, rx: 2}},
            }}
          />
        </Chart>
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
