import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function CoinFirstLookInformations({selectedCoin}) {
  return (
    <View style={styles.container}>
      <View style={styles.coinNameAndPriceView}>
        <Text style={styles.selectedCoinAndCurrencyText}>
          {selectedCoin?.symbol.toUpperCase()}/USDT
        </Text>
        <Text style={{fontWeight: 'bold'}}>{selectedCoin?.name}</Text>
        <View style={styles.pricesView}>
          <Text
            style={[
              styles.colorfulPriceText,
              selectedCoin?.high_24h < selectedCoin?.low_24h
                ? {color: '#FF6838'}
                : {color: '#58BD7D'},
            ]}>
            {selectedCoin?.current_price}
          </Text>
          <View style={styles.fixedColorPriceView}>
            <Image
              style={styles.dollarImg}
              source={require('../../assets/dollar.png')}
            />
            <Text style={styles.fixedColorPriceText}>
              {selectedCoin?.current_price}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.priceChangesView}>
        <View style={styles.eachChangesView}>
          <View style={styles.imageAndChangeDurationView}>
            <Image source={require('../../assets/clock.png')} />
            <Text>24h change</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={{color: '#000', fontWeight: '500'}}>
              {selectedCoin?.price_change_24h.toString().substring(0, 7)}
            </Text>
            <Text style={{color: '#000', fontWeight: '500'}}>
              {selectedCoin?.price_change_percentage_24h
                .toString()
                .substring(0, 5)}
              %
            </Text>
          </View>
        </View>
        <View style={styles.eachChangesView}>
          <View style={styles.imageAndChangeDurationView}>
            <Image source={require('../../assets/upArrow.png')} />
            <Text>24h high</Text>
          </View>
          <Text style={{color: '#000', fontWeight: '500'}}>
            {selectedCoin?.high_24h}
          </Text>
        </View>
        <View style={styles.eachChangesView}>
          <View style={styles.imageAndChangeDurationView}>
            <Image source={require('../../assets/downArrow.png')} />
            <Text>24h low</Text>
          </View>
          <Text style={{color: '#000', fontWeight: '500'}}>
            {selectedCoin?.low_24h}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 10,
  },
  coinNameAndPriceView: {
    gap: 10,
    marginTop: 15,
    marginLeft: 15,
  },
  selectedCoinAndCurrencyText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
  },
  pricesView: {
    gap: 5,
  },
  colorfulPriceText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  fixedColorPriceView: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    height: 20,
  },
  dollarImg: {
    width: 18,
    height: 18,
  },
  fixedColorPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceChangesView: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  eachChangesView: {
    width: '50%',
    gap: 10,
    marginBottom: 20,
  },
  imageAndChangeDurationView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
