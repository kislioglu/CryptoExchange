import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

export default function CoinCurrencyGraphics({isValidData, spark}) {
  return (
    <View style={styles.container}>
      {isValidData && (
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
      )}
      {!isValidData && (
        <View style={{alignItems: 'center', gap: 20}}>
          <Image source={require('../../assets/sorry.png')} />
          <Text style={styles.noDataText}>
            Can not reach data for selected coin. Sorry about that. The api
            which i use for this app doesn't include all coins. Selected coin
            listed on the trend coins but there is no market data for it.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f4',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noDataText: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
});
