import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function TrendNfts({trend}) {
  const navigation = useNavigation();
  const handleOnPress = trend => {
    navigation.navigate('CoinCurrencyGraphics', {coinId: trend.item.id});
  };

  return (
    <View style={styles.itemNameAndImg}>
      <View style={styles.itemView}>
        <Image style={styles.itemImg} source={{uri: trend.thumb}} />
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.itemName}>
          {trend.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={{width: 40}}>
          {trend.symbol}
        </Text>
      </View>

      <View style={styles.itemContainerView}>
        <View style={styles.eachItemView}>
          <Text style={styles.eachItemLabel}>Price</Text>
          <Text style={styles.priceText}>
            {Number(
              trend.floor_price_in_native_currency.toString().substring(0, 4),
            )}
          </Text>
        </View>
        <View style={styles.eachItemView}>
          <Text style={styles.eachItemLabel}>24h</Text>
          <Text
            style={[
              styles.usdAndPercentageText,
              trend.data.floor_price < 0 ? {color: 'red'} : {color: 'green'},
            ]}>
            {Number(
              trend.data.floor_price_in_usd_24h_percentage_change
                .toString()
                .substring(0, 5),
            ) + '%'}
          </Text>
        </View>
        <View style={styles.eachItemView}>
          <Text style={styles.eachItemLabel}>Marketcap</Text>
          <Text style={styles.usdAndPercentageText}>
            {<Text>No data</Text>}
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
