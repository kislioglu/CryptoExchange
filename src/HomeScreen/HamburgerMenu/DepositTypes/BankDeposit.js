import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import FooterNav from '../../Footer/FooterNav';
import {globalCss} from '../../../../styles/globalCss';

export default function BankDeposit() {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [currencyValue, setCurrencyValue] = useState('usd');
  const [paymentValue, setPaymentValue] = useState('swift');
  const [currencyItems, setcurrencyItems] = useState([
    {label: 'USD', value: 'usd'},
    {label: 'EUR', value: 'eur'},
    {label: 'RUB', value: 'rub'},
  ]);
  const [paymentItems, setPaymentItems] = useState([
    {label: 'Bank (SWIFT)', value: 'swift'},
    {label: 'Bank (EUR)', value: 'eur'},
    {label: 'Bank (USD)', value: 'usd'},
  ]);

  const [amount, setAmount] = useState('50.00');

  const renderAmountButton = currentAmount => {
    const isSelected = amount === currentAmount;

    return (
      <TouchableOpacity
        key={currentAmount}
        style={[
          styles.eachAmount,
          {
            backgroundColor: isSelected ? '#23262f' : '#fff',
            borderColor: isSelected ? '#23262f' : '#e6e8ec',
          },
        ]}
        onPress={() => setAmount(currentAmount)}>
        <Text style={{color: isSelected ? '#fff' : '#000'}}>
          {currentAmount}
        </Text>
      </TouchableOpacity>
    );
  };

  const amounts = ['50.00', '100.00', '200.00'];

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{borderBottomWidth: 1, borderColor: '#e6e8ec'}}>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', fontSize: 28, color: '#23262f'}}>
            Deposit fiat
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '700', color: '#777e90'}}>
              How to buy crypto on Bitcloud
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Text style={{fontWeight: '700', color: '#23262f'}}>
                Learn now
              </Text>
              <Image
                style={{width: 20, height: 20, marginTop: 1}}
                source={require('../../../../assets/rightArrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 40}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: '#23262f',
            width: '70%',
            marginBottom: 25,
          }}>
          Select currency and payment method
        </Text>
        <View style={{marginBottom: 20}}>
          <Text style={styles.dropDownCaptionText}>Select currency</Text>
          <DropDownPicker
            style={styles.dropDown}
            dropDownContainerStyle={styles.dropdownContainer}
            open={openCurrency}
            value={currencyValue}
            items={currencyItems}
            setOpen={setOpenCurrency}
            setValue={setCurrencyValue}
            setItems={setcurrencyItems}
            labelStyle={{fontWeight: '600', color: '#23262f'}}
            textStyle={{fontWeight: '500', color: '#23262f'}}
          />
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={styles.dropDownCaptionText}>Select payment</Text>
          <DropDownPicker
            style={styles.dropDown}
            dropDownContainerStyle={styles.dropdownContainer}
            open={openPayment}
            value={paymentValue}
            items={paymentItems}
            setOpen={setOpenPayment}
            setValue={setPaymentValue}
            setItems={setPaymentItems}
            labelStyle={{fontWeight: '600', color: '#23262f'}}
            textStyle={{fontWeight: '500', color: '#23262f'}}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: '600', color: '#23262f', fontSize: 16}}>
          Amount
        </Text>
        <Text
          style={{
            fontWeight: '600',
            color: '#23262f',
            fontSize: 60,
            marginBottom: 10,
          }}>
          {amount}
        </Text>
        <View style={{flexDirection: 'row', gap: 15}}>
          {amounts.map(renderAmountButton)}
        </View>
      </View>
      <TouchableOpacity
        style={[
          globalCss.btnPrimary,
          {
            marginTop: 30,
            height: 48,
            alignSelf: 'center',
            width: 300,
            borderRadius: 25,
          },
        ]}>
        <Text
          style={[
            {
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
            },
            globalCss.textColorWhite,
          ]}>
          Continue
        </Text>
      </TouchableOpacity>
      <View style={{backgroundColor: '#f2f3f4', marginTop: 30}}>
        <ContactUs />
      </View>
      <View>
        <FooterNav />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    width: '100%',
    borderColor: '#e6e8ec',
    alignSelf: 'center',
    borderWidth: 2,
    zIndex: 10,
  },
  dropdownContainer: {
    width: '100%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
    marginTop: 2,
    zIndex: 15,
  },
  header: {
    marginHorizontal: 30,
    marginTop: 50,
    gap: 25,
    marginBottom: 40,
  },
  dropDownCaptionText: {
    fontWeight: 'bold',
    color: '#23262f',
    marginBottom: 15,
  },
  eachAmount: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    width: 80,
    alignItems: 'center',
  },
});
