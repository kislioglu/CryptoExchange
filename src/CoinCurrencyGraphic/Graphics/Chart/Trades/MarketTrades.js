import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {marketTradesStaticData} from '../../../../../staticDatas/marketTrades';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ChartTrades() {
  const [tradesData, setTradesData] = useState([]);
  const [sortField, setSortField] = useState('time');
  const [isAscending, setIsAscending] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('marketTrades');
  const [items, setItems] = useState([
    {label: 'Market Trades', value: 'marketTrades'},
    {label: 'My Trades', value: 'myTrade'},
    {label: 'Open Orders', value: 'openOrders'},
    {label: 'Favorites', value: 'favorites'},
  ]);

  useEffect(() => {
    setTradesData(marketTradesStaticData);
  }, []);

  const parseDate = dateString => {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
  };

  const handleSort = field => {
    const sortedData = [...tradesData].sort((a, b) => {
      if (field === 'time') {
        return isAscending
          ? parseDate(a.time) - parseDate(b.time)
          : parseDate(b.time) - parseDate(a.time);
      } else if (field === 'price') {
        return isAscending
          ? parseFloat(a.price.replace(/\./g, '')) -
              parseFloat(b.price.replace(/\./g, ''))
          : parseFloat(b.price.replace(/\./g, '')) -
              parseFloat(a.price.replace(/\./g, ''));
      } else if (field === 'amount') {
        return isAscending
          ? parseFloat(a.amount) - parseFloat(b.amount)
          : parseFloat(b.amount) - parseFloat(a.amount);
      }
    });
    setTradesData(sortedData);
    setIsAscending(!isAscending);
    setSortField(field);
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.tradeDetailsView}>
        <View style={styles.eachtradeDetailView}>
          <TouchableOpacity
            style={styles.tradeCaptions}
            onPress={() => handleSort('time')}>
            <Text style={styles.titleText}>Time</Text>
            <Image
              style={styles.sortImg}
              source={require('../../../../../assets/sort.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.eachtradeDetailView}>
          <TouchableOpacity
            style={styles.tradeCaptions}
            onPress={() => handleSort('price')}>
            <Text style={styles.titleText}>Price</Text>
            <Image
              style={styles.sortImg}
              source={require('../../../../../assets/sort.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.eachtradeDetailView}>
          <TouchableOpacity
            style={styles.tradeCaptions}
            onPress={() => handleSort('amount')}>
            <Text style={styles.titleText}>Amount</Text>
            <Image
              style={styles.sortImg}
              source={require('../../../../../assets/sort.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {tradesData.map((tradeData, index) => (
        <View style={styles.tradeDetailsView} key={index}>
          <View style={styles.eachtradeDetailView}>
            <Text style={{color: '#777e90'}}>{tradeData.time}</Text>
          </View>
          <View style={styles.eachtradeDetailView}>
            <Text style={{color: '#58BD7D'}}>{tradeData.price}</Text>
          </View>
          <View style={styles.eachtradeDetailView}>
            <Text style={{color: '#23262f'}}>{tradeData.amount}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  dropDownView: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#e6e8ec',
    borderRadius: 10,
    marginBottom: 20,
    zIndex: 10,
  },
  dropDown: {
    width: '100%',
    borderColor: '#e6e8ec',
    alignSelf: 'center',
    borderWidth: 2,
  },
  dropdownContainer: {
    width: '100%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
    marginTop: 2,
  },
  tradeDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    zIndex: 1,
  },
  eachtradeDetailView: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: '#777e90',
  },
  tradeCaptions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  sortImg: {
    width: 10,
    height: 10,
  },
});
