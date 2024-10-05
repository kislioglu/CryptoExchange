import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function TrendCoins({trend}) {
  const navigation = useNavigation();
  const handleOnPress = trend => {
    navigation.navigate('CoinFirstLookInformations', {selectedCoin: trend});
  };

  return (
    <View style={styles.itemNameAndImg}>
      <View style={styles.itemView}>
        <Image style={styles.itemImg} source={{uri: trend.item.thumb}} />
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.itemName}>
          {trend.item.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={{width: 40}}>
          {trend.item.symbol}
        </Text>
        <TouchableOpacity
          onPress={() => handleOnPress(trend)}
          activeOpacity={0.8}
          style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>Buy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainerView}>
        <View style={styles.eachItemView}>
          <Text style={styles.eachItemLabel}>Price</Text>
          <Text style={styles.priceText}>
            {Number(trend.item.data.price.toString().substring(0, 7))}
          </Text>
        </View>
        <View style={styles.eachItemView}>
          <Text style={styles.eachItemLabel}>24h</Text>
          <Text
            style={[
              styles.usdAndPercentageText,
              trend.item.data.price_change_percentage_24h.usd < 0
                ? {color: 'red'}
                : {color: 'green'}
            ]}>
            {Number(
              trend.item.data.price_change_percentage_24h.usd
                .toString()
                .substring(0, 5),
            ) + '%'}
          </Text>
        </View>
        <View style={styles.eachItemView}>
          <Text style={styles.eachItemLabel}>Marketcap</Text>
          <Text style={styles.usdAndPercentageText}>
            {trend.item.data.market_cap}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemNameAndImg: {
    width: '90%',
    marginLeft: 20,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImg: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    borderRadius: 50,
    marginRight: 15,
  },
  itemName: {
    color: '#000',
    fontWeight: '600',
    marginRight: 5,
    maxWidth: 150,
  },
  buyBtn: {
    position: 'absolute',
    right: 0,
    width: 90,
    backgroundColor: '#0045ea',
    padding: 6,
    alignItems: 'center',
    borderRadius: 20,
  },
  buyBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainerView: {
    gap: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e8ec',
    paddingBottom: 20,
  },
  priceText: {
    fontWeight: '600',
    color: '#000',
  },
  eachItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachItemLabel: {
    fontWeight: '600',
    color: '#777e90',
  },
  usdAndPercentageText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
  },
});
