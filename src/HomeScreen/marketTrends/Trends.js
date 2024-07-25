import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Table, Row} from 'react-native-table-component';
import TrendsRequest from '../../../services/TrendRequest';
import TrendCoinsAndNfts from './TrendCoinsAndNfts';
import {useNavigation} from '@react-navigation/native';

export default function Trends() {
  const trends = TrendsRequest();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('coins');
  const [items, setItems] = useState([
    {label: 'Crypto', value: 'coins'},
    {label: 'NFT', value: 'nfts'},
  ]);
  const [visibleCount, setVisibleCount] = useState(5);
  const state = {
    tableHead: ['Name', 'Price', '24h change'],
    widthArr: [150, 100, 100],
  };

  const loadMore = () => {
    navigation.navigate('TodaysTrendCurrencyPrices');
  };

  return (
    <View>
      <View style={styles.marketTrendView}>
        <Text style={styles.marketTrendText}>Market trend</Text>
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
        {value && (
          <View>
            <View style={styles.container}>
              <ScrollView horizontal={true}>
                <View>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    <Row
                      data={state.tableHead}
                      widthArr={state.widthArr}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                  </Table>
                  <View>
                    <TrendCoinsAndNfts
                      value={value}
                      trends={trends}
                      visibleCount={visibleCount}
                      state={state}
                    />
                  </View>
                  {visibleCount < trends?.coins?.length ? (
                    <TouchableOpacity style={styles.moreBtn} onPress={loadMore}>
                      <Text style={styles.moreText}>View More</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    </View>
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
    borderColor: '#e6e8ec',
    borderWidth: 2,
  },
  dropdownContainer: {
    width: '90%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
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
    fontSize: 16,
  },
  text: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  moreBtn: {
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
  moreText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});
