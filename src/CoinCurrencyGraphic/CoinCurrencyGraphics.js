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
  const tickCount = 7;
  const stepSize = Math.floor(spark.length / tickCount);
  const today = new Date();
  const last7Days = [];

  for (let i = 6; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    last7Days.push(day.toDateString());
  }

  return (
    <View style={styles.container}>
      {isValidData && (
        <Chart
          style={{
            backgroundColor: '#fff',
            height: 450,
            width: '90%',
            marginTop: 15,
            borderRadius: 10,
          }}
          data={spark}
          padding={{left: 40, bottom: 40, right: 20, top: 20}}
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
            tickCount={20}
            theme={{labels: {formatter: v => v.toFixed(1)}}}
          />
          <HorizontalAxis
            tickCount={tickCount}
            theme={{
              labels: {
                formatter: value => {
                  const index = Math.floor(value / stepSize) % last7Days.length;
                  return last7Days[index];
                },
                label: {
                  color: '#000',
                  dy: -24,
                },
              },
            }}
          />
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
              stroke: {color: '#ffa502', width: 3},
              scatter: {default: {width: 3, height: 3, rx: 2}},
            }}
          />
        </Chart>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f4',
    marginBottom: 5,
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
