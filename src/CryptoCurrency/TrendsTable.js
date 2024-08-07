import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TrendsRequest from '../../services/TrendRequest';
import {useNavigation} from '@react-navigation/native';
import SearchCoin from '../../services/SearchCoin';

export default function TrendsTable() {
  const searchedCoin = SearchCoin();
  const navigation = useNavigation();
  const trends = TrendsRequest();
  const getFilteredTrends = () => {
    if (value === 'coins') {
      return trends.coins;
    }
    if (value === 'nfts') {
      return trends.nfts;
    }
    return [];
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('coins');
  const [items, setItems] = useState([
    {label: 'Cryptocurrencies', value: 'coins'},
    {label: 'NFT', value: 'nfts'},
  ]);
  const handleOnPress = trend => {
    // SearchCoin(trend.item.name);
    navigation.navigate('CoinCurrencyGraphics', {coinName: trend.item.name});
  };

  const filteredTrends = getFilteredTrends();
  return (
    <View>
      <View style={styles.dropDownView}>
        <DropDownPicker
          style={styles.dropDown}
          dropDownContainerStyle={styles.dropdownContainer}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
        />
      </View>

      <ScrollView style={styles.dataWrapper}>
        <View style={{gap: 20}}>
          {filteredTrends?.map((trend, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleOnPress(trend)}
                style={styles.itemNameAndImg}
                key={index}>
                <View style={styles.itemView}>
                  <Image
                    style={styles.itemImg}
                    source={
                      value === 'coins'
                        ? {uri: trend.item.thumb}
                        : {uri: trend.thumb}
                    }
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.itemName}>
                    {value === 'coins' ? trend.item.name : trend.name}
                  </Text>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{width: 40}}>
                    {value === 'coins' ? trend.item.symbol : trend.symbol}
                  </Text>
                </View>

                <View style={styles.itemContainerView}>
                  <View style={styles.eachItemView}>
                    <Text style={styles.eachItemLabel}>Price</Text>
                    <Text style={styles.priceText}>
                      {value === 'coins'
                        ? Number(
                            trend.item.data.price.toString().substring(0, 7),
                          )
                        : Number(
                            trend.floor_price_in_native_currency
                              .toString()
                              .substring(0, 4),
                          )}
                    </Text>
                  </View>
                  <View style={styles.eachItemView}>
                    <Text style={styles.eachItemLabel}>24h</Text>
                    <Text
                      style={[
                        styles.usdAndPercentageText,
                        value === 'coins'
                          ? trend.item.data.price_change_percentage_24h.usd < 0
                            ? styles.red
                            : styles.green
                          : trend.data.floor_price < 0
                          ? styles.red
                          : styles.green,
                      ]}>
                      {value === 'coins'
                        ? Number(
                            trend.item.data.price_change_percentage_24h.usd
                              .toString()
                              .substring(0, 5),
                          ) + '%'
                        : Number(
                            trend.data.floor_price_in_usd_24h_percentage_change
                              .toString()
                              .substring(0, 5),
                          ) + '%'}
                    </Text>
                  </View>
                  <View style={styles.eachItemView}>
                    <Text style={styles.eachItemLabel}>Marketcap</Text>
                    <Text style={styles.usdAndPercentageText}>
                      {value === 'coins' ? (
                        trend.item.data.market_cap
                      ) : (
                        <Text>No data</Text>
                      )}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownView: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderTopWidth: 1,
    borderColor: '#e6e8ec',
    shadowColor: 'black',
    shadowOpacity: 0.77,
    shadowOffset: {width: 3, height: 6},
    shadowRadius: 10,
    elevation: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  dropDown: {
    width: '80%',
    borderColor: '#e6e8ec',
    borderWidth: 1,
    alignSelf: 'center',
  },
  dropdownContainer: {
    width: '80%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
    marginTop: 2,
  },
  dataWrapper: {
    marginTop: 5,
  },
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
  },
  usdAndPercentageText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
});
