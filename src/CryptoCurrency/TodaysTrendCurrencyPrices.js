import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import TopThreeCoins from './TopThreeCoins';
import {ScrollView} from 'react-native';
import TrendsTable from './TrendsTable';

export default function TodaysTrendCurrencyPrices() {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.captionView}>
          <Text style={styles.caption}>Today's Cryptocurrency prices</Text>
          <Text style={styles.lowerCaption}>
            The global crypto market cap is $1.86T
          </Text>
        </View>
        <Image
          style={styles.marketPic}
          source={require('../../assets/market-pic.png')}
        />
        <View>
          <TopThreeCoins />
        </View>
        <View style={{backgroundColor: '#fcfdfd'}}>
          <TrendsTable />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#decbe9',
  },
  captionView: {
    marginLeft: 40,
    marginTop: 50,
    gap: 20,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 44,
    color: '#000',
    width: '90%',
  },
  lowerCaption: {
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
  marketPic: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
