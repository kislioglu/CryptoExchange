import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Row, Table} from 'react-native-table-component';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

export default function TrendCoinsAndNfts({value, trends, visibleCount, state}) {
  //   console.log(trends);
  const getFilteredTrends = () => {
    if (value === 'coins') {
      return trends.coins;
    }
    if (value === 'nfts') {
      return trends.nfts;
    }
    return [];
  };

  const filteredTrends = getFilteredTrends();
  return (
    <ScrollView style={styles.dataWrapper}>
      <Table style={{gap: 20}} borderStyle={{borderColor: '#C1C0B9'}}>
        {filteredTrends?.slice(0, visibleCount).map((trend, index) => {
          return (
            <Row
              key={index}
              data={[
                <View style={styles.itemView}>
                  <Image
                    style={styles.itemImg}
                    source={
                      value === 'coins'
                        ? {uri: trend.item.thumb}
                        : {uri: trend.thumb}
                    }
                  />
                  <Text style={styles.itemName}>
                    {value === 'coins' ? trend.item.name : trend.name}
                  </Text>
                </View>,
                <Text style={styles.priceText}>
                  {value === 'coins'
                    ? Number(trend.item.data.price.toString().substring(0, 7))
                    : Number(
                        trend.floor_price_in_native_currency
                          .toString()
                          .substring(0, 4),
                      ) + ' ETH'}
                </Text>,
                <Text
                  style={[
                    styles.usdText,
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
                    : trend.data.floor_price}
                </Text>,
              ]}
              widthArr={state.widthArr}
              style={styles.row}
              textStyle={styles.text}
            />
          );
        })}
      </Table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  marketTrendView: {},
  marketTrendText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#23262f',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  dropDown: {
    width: '90%',
    marginLeft: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#777e90',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dataWrapper: {
    marginTop: 5,
  },
  row: {
    height: 50,
  },
  itemView: {
    flexDirection: 'row',
  },
  itemImg: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    borderRadius: 50,
  },
  itemName: {
    color: '#000',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 15,
    width: '70%',
  },
  priceText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
  },
  usdText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
  moreOrCollapseBtn: {
    borderRadius: 20,
    width: '90%',
    height: 45,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e6e8ec',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  moreOrCollapseText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});
