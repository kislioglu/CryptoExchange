import {View, StyleSheet, Image, Animated} from 'react-native';
import React, {useRef} from 'react';
import HamburgerMenuToggle from '../HamburgerMenu/HamburgerMenuToggle';
import useMenuStore from '../HamburgerMenu/zustand/UseMenuStore';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import LanguageAndCurrencySelector from './LanguageAndCurrencySelector/LanguageAndCurrencySelector';

export default function Header() {
  const {isOpen} = useMenuStore();

  const slideAnim = useRef(new Animated.Value(-30000)).current;

  const slideAnimation = Animated.timing(slideAnim, {
    toValue: isOpen ? -30000 : 0,
    duration: 30000,
    useNativeDriver: true,
  }).start();

  return (
    <View
      style={{
        minHeight: 80,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 0,
          marginLeft: 20,
          zIndex: 10000,
        }}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <View
        style={{
          height: 60,
          right: 100,
          width: 100,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LanguageAndCurrencySelector />
      </View>
      <View
        style={{
          height: '100%',
          top: 20,
          right: 20,
          width: 40,
          position: 'absolute',
        }}>
        <HamburgerMenuToggle />
      </View>
      <View style={[slideAnimation]}>{isOpen ? <HamburgerMenu /> : null}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    width: 32,
    height: 32,
  },
});
