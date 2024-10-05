import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

export default function BuyModal({
  isBuyModalVisible,
  setBuyModalVisible,
  coinsInfo,
}) {
  const [value, setValue] = useState(0);

  const handleInputChange = input => {
    const numericValue = parseFloat(input);
    if (!isNaN(numericValue)) {
      setValue(numericValue);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isBuyModalVisible}
      onRequestClose={() => setBuyModalVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={styles.modalTitle}>Place order</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setBuyModalVisible(false)}>
              <Image source={require('../../../../assets/down.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
              Buy {coinsInfo?.symbol?.toUpperCase()}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../../assets/walletIcon.png')}
              />
              <Text style={{fontWeight: 'bold', color: '#000'}}>USDT</Text>
            </View>
          </View>

          <View style={{gap: 15}}>
            <View style={styles.AmountInputView}>
              <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="numeric"
                placeholderTextColor={'#777e90'}
              />
              <TouchableOpacity style={styles.currencyType}>
                <Text style={{fontWeight: 'bold', color: '#777e90'}}>USDT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.AmountInputView}>
              <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={value.toFixed(1)}
                onChangeText={handleInputChange}
                placeholderTextColor={'#777e90'}
              />
              <TouchableOpacity
                style={[
                  styles.currencyType,
                  {borderLeftWidth: 1, paddingLeft: 10, borderColor: '#0045ea'},
                ]}>
                <Text style={{fontWeight: 'bold', color: '#777e90'}}>BTC</Text>
              </TouchableOpacity>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10000}
              step={1}
              value={value}
              onValueChange={sliderValue => setValue(sliderValue)}
              minimumTrackTintColor="#007AFF"
              maximumTrackTintColor="#D3D3D3"
              thumbTintColor="#555"
            />
            <View style={styles.AmountInputView}>
              <TextInput
                style={styles.input}
                placeholder="Total"
                keyboardType="numeric"
                placeholderTextColor={'#777e90'}
              />
              <TouchableOpacity style={styles.currencyType}>
                <Text style={{fontWeight: 'bold', color: '#777e90'}}>BTC</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.BuyButton}>
              <Text style={styles.BuyButtonText}>
                Buy {coinsInfo?.symbol?.toUpperCase()}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '60%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777e90',
  },
  closeButton: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  AmountInputView: {
    width: '100%',
    flexDirection: 'row',
    borderColor: '#e6e8ec',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: '#777e90',
  },
  currencyType: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
    alignSelf: 'center',
  },
  BuyButton: {
    width: '100%',
    backgroundColor: '#58BD7D',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 5,
  },
  BuyButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
