import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {globalCss} from '../../../../styles/globalCss';

export default function LanguageAndCurrencySelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('US');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const languages = [
    {symbol: 'US', language: 'English'},
    {symbol: 'VN', language: 'Viatnamese'},
    {symbol: 'Ru', language: 'Russia'},
  ];
  const currencies = [
    {symbol: 'USD', currency: 'USD'},
    {symbol: 'RUB', currency: 'RUB'},
    {symbol: 'EUR', currency: 'EUR'},
    {symbol: 'JPY', currency: 'JPY'},
    {symbol: 'BTC', currency: 'BTC'},
  ];
  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsSelectorVisible(true)}
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          width: 100,
          height: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.currencyAndLanguage}>{selectedLanguage}</Text>
        <Text style={styles.currencyAndLanguage}>{'/'}</Text>
        <Text style={styles.currencyAndLanguage}>{selectedCurrency}</Text>
        <Image
          style={styles.downArrowImg}
          source={require('../../../../assets/down.png')}
        />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isSelectorVisible}
        onRequestClose={() => setIsSelectorVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '90%',
              height: 280,
              top: 100,
              marginHorizontal: 20,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                right: 10,
                top: 10,
              }}
              onPress={() => setIsSelectorVisible(false)}>
              <Image
                style={styles.downArrowImg}
                source={require('../../../../assets/down.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                top: 30,
                justifyContent: 'space-evenly',
              }}>
              <View style={{gap: 10, width: '40%'}}>
                <Text
                  style={[
                    globalCss.textColorGrey,
                    {fontSize: 12, fontWeight: '600'},
                  ]}>
                  Language
                </Text>
                {languages.map((ln, index) => (
                  <TouchableOpacity
                    onPress={() => setSelectedLanguage(ln.symbol)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      gap: 10,
                      borderBottomWidth: index !== languages.length - 1 ? 1 : 0,
                      paddingBottom: 10,
                      borderColor: '#e6e8ec',
                    }}
                    key={index}>
                    <Text
                      style={[
                        globalCss.textColorGrey,
                        {fontSize: 10, fontWeight: 'bold'},
                        selectedLanguage === ln.symbol ? {color: '#000'} : null,
                      ]}>
                      {ln.symbol}
                    </Text>
                    <Text
                      style={[
                        globalCss.textColorGrey,
                        {fontWeight: 'bold'},
                        selectedLanguage === ln.symbol ? {color: '#000'} : null,
                      ]}>
                      {ln.language}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{width: 2, height: '100%', backgroundColor: '#e6e8ec'}}
              />
              <View style={{gap: 10, width: '40%'}}>
                <Text
                  style={[
                    globalCss.textColorGrey,
                    {fontSize: 12, fontWeight: '600'},
                  ]}>
                  Currency
                </Text>
                {currencies.map((cr, index) => (
                  <TouchableOpacity
                    onPress={() => setSelectedCurrency(cr.symbol)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                      borderBottomWidth:
                        index !== currencies.length - 1 ? 1 : 0,
                      paddingBottom: 10,
                      borderColor: '#e6e8ec',
                      paddingLeft: 10,
                    }}
                    key={index}>
                    <View
                      style={[
                        {
                          width: 10,
                          height: 10,
                          borderRadius: 10,
                          backgroundColor: '#e6e8ec',
                        },
                        selectedCurrency === cr.currency
                          ? {backgroundColor: '#000'}
                          : null,
                      ]}
                    />
                    <Text
                      style={[
                        globalCss.textColorGrey,
                        {fontWeight: 'bold'},
                        selectedCurrency === cr.currency
                          ? {color: '#000'}
                          : null,
                      ]}>
                      {cr.currency}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  currencyAndLanguage: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  downArrowImg: {
    width: 16,
    height: 16,
  },
});
