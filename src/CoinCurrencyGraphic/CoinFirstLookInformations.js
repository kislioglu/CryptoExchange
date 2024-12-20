import React, {useContext, useEffect, useState} from 'react';
import CryptoRequest from '../../services/ApiRequests';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {LanguageAndCurrencyContext} from '../HomeScreen/Header/LanguageAndCurrencySelector/LanguageAndCurrencyContext';
import Graphics from './Graphics';
import BuyModal from './Graphics/Modals/BuyModal';
import SellModal from './Graphics/Modals/SellModal';
import {globalCss} from '../../styles/globalCss';

export default function CoinFirstLookInformations({route}) {
  const {selectedCoin} = route.params;
  const coinData = CryptoRequest(selectedCoin?.item.id);
  const {selectedCurrency} = useContext(LanguageAndCurrencyContext);
  const [coinsInfo, setCoinsInfo] = useState();
  const [spark, setSpark] = useState([]);
  const [isBuyModalVisible, setBuyModalVisible] = useState(false);
  const [isSellModalVisible, setSellModalVisible] = useState(false);

  useEffect(() => {
    if (coinData) {
      setCoinsInfo(coinData);
    }
  }, [coinData]);

  useEffect(() => {
    if (coinsInfo?.sparkline_in_7d?.price) {
      const sparklineData = coinsInfo.sparkline_in_7d.price.map(
        (price, index) => ({x: index, y: price}),
      );
      setSpark(sparklineData);
    }
  }, [coinsInfo]);

  const isValidData =
    spark.length > 0 && spark.every(d => !isNaN(d.x) && !isNaN(d.y));

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.subContainerView}>
          <View style={styles.coinNameAndPriceView}>
            <Text style={styles.selectedCoinAndCurrencyText}>
              {coinsInfo?.symbol?.toUpperCase()}/
              {selectedCurrency.toUpperCase()}
            </Text>
            <Text style={{fontWeight: 'bold', color: '#777e90'}}>
              {coinsInfo?.name}
            </Text>
            <View style={styles.pricesView}>
              <Text
                style={[
                  styles.colorfulPriceText,
                  coinsInfo?.high_24h < coinsInfo?.low_24h
                    ? {color: '#FF6838'}
                    : {color: '#58BD7D'},
                ]}>
                {coinsInfo?.current_price}
              </Text>
              <View style={styles.fixedColorPriceView}>
                <Image
                  style={styles.dollarImg}
                  source={require('../../assets/dollar.png')}
                />
                <Text
                  style={[styles.fixedColorPriceText, globalCss.textColorGrey]}>
                  {coinsInfo?.current_price}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.priceChangesView}>
            <View style={styles.eachChangesView}>
              <View style={styles.imageAndChangeDurationView}>
                <Image source={require('../../assets/clock.png')} />
                <Text style={{color: '#777e90'}}>24h change</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={{color: '#000', fontWeight: '500'}}>
                  {coinsInfo?.price_change_24h?.toString()?.substring(0, 8)}
                </Text>
                <Text style={{color: '#000', fontWeight: '500'}}>
                  {coinsInfo?.price_change_percentage_24h
                    ?.toString()
                    ?.substring(0, 5)}
                  %
                </Text>
              </View>
            </View>
            <View style={styles.eachChangesView}>
              <View style={styles.imageAndChangeDurationView}>
                <Image source={require('../../assets/upArrow.png')} />
                <Text style={{color: '#777e90'}}>24h high</Text>
              </View>
              <Text style={{color: '#000', fontWeight: '500'}}>
                {coinsInfo?.high_24h}
              </Text>
            </View>
            <View style={styles.eachChangesView}>
              <View style={styles.imageAndChangeDurationView}>
                <Image source={require('../../assets/downArrow.png')} />
                <Text style={{color: '#777e90'}}>24h low</Text>
              </View>
              <Text style={{color: '#000', fontWeight: '500'}}>
                {coinsInfo?.low_24h}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Graphics isValidData={isValidData} spark={spark} />
        </View>
      </ScrollView>

      {/* Buy/Sell section at the bottom */}
      <View style={styles.buySellContainer}>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => setBuyModalVisible(true)}>
          <Text style={[styles.buttonText, globalCss.textColorWhite]}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sellButton}
          onPress={() => setSellModalVisible(true)}>
          <Text style={[styles.buttonText, globalCss.textColorWhite]}>
            Sell
          </Text>
        </TouchableOpacity>
      </View>

      <BuyModal
        isBuyModalVisible={isBuyModalVisible}
        setBuyModalVisible={setBuyModalVisible}
        coinsInfo={coinsInfo}
      />
      <SellModal
        isSellModalVisible={isSellModalVisible}
        setSellModalVisible={setSellModalVisible}
        coinsInfo={coinsInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 55,
  },
  subContainerView: {
    width: '90%',
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 20,
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
  buySellContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  buyButton: {
    backgroundColor: '#58BD7D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '40%',
  },
  sellButton: {
    backgroundColor: '#FF6838',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '40%',
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
