import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CryptoRequest from '../../services/ApiRequests';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

export default function TopThreeCoins() {
  const coinData = CryptoRequest();
  const [matched, setMatched] = useState([]);
  const topCoins = [{name: 'Bitcoin'}, {name: 'Ethereum'}, {name: 'Arbitrum'}];

  useEffect(() => {
    const matchedCoins = coinData?.filter(trnd =>
      topCoins.some(tCoin => trnd?.name === tCoin?.name),
    );
    setMatched(matchedCoins?.map(coin => coin));
  }, [coinData]);
  return (
    <ScrollView
      style={styles.topCoinsScroll}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {matched?.map((matcehdCoin, index) => (
        <View
          activeOpacity={0.7}
          style={styles.topCoinsView}
          key={index}>
          <Image style={styles.topCoinImg} source={{uri: matcehdCoin.image}} />
          <View style={styles.priceView}>
            <View style={styles.coinNameAndChangePercentage}>
              <Text style={styles.topCoinName}>
                {matcehdCoin.symbol.toUpperCase()}/USDT
              </Text>
              <Text
                style={[
                  styles.pricePercentage,
                  matcehdCoin.price_change_percentage_24h < 0
                    ? {backgroundColor: '#ff6838'}
                    : {backgroundColor: '#58bd7d'},
                ]}>
                {Number(
                  matcehdCoin.price_change_percentage_24h
                    .toString()
                    .substring(0, 6),
                )}
                %
              </Text>
            </View>
            <Text style={styles.topCoinPrice}>{matcehdCoin.current_price}</Text>
            <Text style={[styles.topCoinPrice, {fontSize: 14}]}>
              {matcehdCoin.current_price}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topCoinsScroll: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topCoinsView: {
    width: 200,
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 25,
  },
  topCoinImg: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  priceView: {
    gap: 5,
    marginVertical: 20,
  },
  coinNameAndChangePercentage: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  topCoinName: {
    fontWeight: '700',
    color: '#777e90',
  },
  pricePercentage: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: '#fff',
    borderRadius: 15,
    fontWeight: '600',
  },
  topCoinPrice: {
    color: '#23262f',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
