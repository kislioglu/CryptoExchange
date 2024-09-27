import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Trends from '../marketTrends/Trends';
import ContactUs from '../ContactUs/ContactUs';
import {useNavigation} from '@react-navigation/native';
import DownloadApp from '../DownloadApp/DownloadApp';
import JoinUs from '../JoinUs/JoinUs';
import HowItWorks from '../HowItWorks/HowItWorks';
import FooterNav from '../Footer/FooterNav';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
export default function Home() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const topLine = useRef(new Animated.Value(0)).current;
  const bottomLine = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    Animated.parallel([
      Animated.timing(topLine, {
        toValue: isOpen ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(bottomLine, {
        toValue: isOpen ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 80,
          zIndex: 10,
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <View style={styles.logoView}>
          <View style={{flexDirection: 'row', gap: 5, marginLeft: 20}}>
            <Image
              style={styles.logoImg}
              source={require('../../../assets/logo.png')}
            />
            <Text style={styles.companyNameText}>Coiner</Text>
          </View>
          <TouchableOpacity onPress={toggleMenu}>
            <View style={styles.container}>
              <Animated.View
                style={[
                  styles.line,
                  {
                    transform: [
                      {
                        translateY: topLine.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 4],
                        }),
                      },
                      {
                        rotate: topLine.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '45deg'],
                        }),
                      },
                    ],
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.line,
                  {
                    transform: [
                      {
                        translateY: bottomLine.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -2],
                        }),
                      },
                      {
                        rotate: bottomLine.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '-45deg'],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {isOpen ? (
        <HamburgerMenu />
      ) : null}
      <ScrollView
        nestedScrollEnabled={true}
        style={{backgroundColor: '#fff', height: '100%'}}>
        <View style={styles.sloganView}>
          <View style={styles.captionView}>
            <Text style={styles.captionText}>Buy & sell crypto in minutes</Text>
          </View>
          <View style={styles.explanationView}>
            <Text style={styles.explanationText}>
              Trade Bitcoin, Etherium, USDT and the top altcoins on the
              legendary crypto asset exchange.
            </Text>
          </View>
        </View>
        <View style={styles.navigateButtonView}>
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
  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  logoImg: {
    width: 32,
    height: 32,
  },
  companyNameText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
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
    color: '#777e90',
    letterSpacing: 0.2,
  },
  navigateButtonView: {
    width: 150,
    height: 40,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#3772ff',
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
