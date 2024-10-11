import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {globalCss} from '../../../styles/globalCss';

export default function HamburgerMenu() {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.container, {height: screenHeight, width: screenWidth}]}>
      <View style={{marginHorizontal: 30, gap: 10, marginTop: 50}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TodaysTrendCurrencyPrices')}
          style={styles.eachBtn}>
          <Text style={[styles.btnText, globalCss.textColorGrey]}>
            Exchange
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => setPressed(!pressed)}
            style={styles.eachBtn}>
            <Text style={[styles.btnText, globalCss.textColorGrey]}>
              Buy Crypto
            </Text>
            <Image
              style={{position: 'absolute', right: 0}}
              source={require('../../../assets/down.png')}
            />
          </TouchableOpacity>
          {pressed ? (
            <View style={{width: '100%', height: 120}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TodaysTrendCurrencyPrices')}
                style={styles.subBtn}>
                <Image source={require('../../../assets/creditCard.png')} />
                <Text style={styles.subBtnText}>Credit card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('BankDeposit')}
                style={styles.subBtn}>
                <Image source={require('../../../assets/walletIcon.png')} />
                <Text style={styles.subBtnText}>Bank deposit</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TodaysTrendCurrencyPrices')}
          style={styles.eachBtn}>
          <Text style={[styles.btnText, globalCss.textColorGrey]}>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TodaysTrendCurrencyPrices')}
          style={styles.eachBtn}>
          <Text style={[styles.btnText, globalCss.textColorGrey]}>
            Discover
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          bottom: 0,
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={[styles.LoginBtn, globalCss.btnPrimary]}>
          <Text style={[styles.signUpBtnText, globalCss.textColorWhite]}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={[
            styles.LoginBtn,
            globalCss.btnPrimary,
            {backgroundColor: '#fff', borderWidth: 2, borderColor: '#e6e8ec'},
          ]}>
          <Text style={styles.LoginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  eachBtn: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subBtn: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  subBtnText: {
    fontWeight: '600',
    color: '#000',
    fontSize: 16,
  },
  LoginBtn: {
    width: '48%',
    height: 45,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  signUpBtnText: {
    fontWeight: '600',
  },
  LoginBtnText: {
    fontWeight: '600',
    color: '#000',
  },
});
