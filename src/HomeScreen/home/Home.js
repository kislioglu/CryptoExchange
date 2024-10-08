import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Trends from '../marketTrends/Trends';
import ContactUs from '../ContactUs/ContactUs';
import {useNavigation} from '@react-navigation/native';
import DownloadApp from '../DownloadApp/DownloadApp';
import JoinUs from '../JoinUs/JoinUs';
import HowItWorks from '../HowItWorks/HowItWorks';
import FooterNav from '../Footer/FooterNav';
import {globalCss} from '../../../styles/globalCss';
import Header from '../Header/Header';
export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Header />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        style={{backgroundColor: '#fff', height: '100%'}}>
        <View style={styles.sloganView}>
          <View style={styles.captionView}>
            <Text style={styles.captionText}>Buy & sell crypto in minutes</Text>
          </View>
          <View style={styles.explanationView}>
            <Text style={[styles.explanationText, globalCss.textColorGrey]}>
              Trade Bitcoin, Etherium, USDT and the top altcoins on the
              legendary crypto asset exchange.
            </Text>
          </View>
        </View>
        <View style={[styles.navigateButtonView, globalCss.btnPrimary]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.navigateButton}
            activeOpacity={0.3}>
            <Text style={styles.navigateButtonText}>Get started now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.walletImgView}>
          <Image
            style={styles.walletImg}
            source={require('../../../assets/walletImg.png')}
          />
        </View>

        <View style={{backgroundColor: '#fff'}}>
          <Trends />
        </View>
        <View style={{backgroundColor: '#f4f5f6'}}>
          <ContactUs />
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <DownloadApp />
        </View>
        <View style={{backgroundColor: '#f4f5f6'}}>
          <JoinUs />
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <HowItWorks />
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <FooterNav />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sloganView: {
    gap: 20,
    width: '100%',
    marginLeft: 20,
    marginTop: 40,
  },
  captionView: {
    width: '60%',
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 44,
    color: '#23262f',
  },
  explanationView: {
    width: '75%',
  },
  explanationText: {
    fontWeight: '500',
    fontSize: 16,

    letterSpacing: 0.2,
  },
  navigateButtonView: {
    width: 150,
    height: 40,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 30,
  },
  navigateButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  navigateButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  walletImgView: {
    width: 400,
    height: 400,
    alignSelf: 'center',
    marginLeft: 20,
  },
  walletImg: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  line: {
    width: 20,
    height: 2,
    backgroundColor: '#777e90',
    marginVertical: 2,
  },
});
