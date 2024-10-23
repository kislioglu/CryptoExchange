import {View, StyleSheet, Image, Animated, Dimensions} from 'react-native';
import React, {useRef} from 'react';
import HamburgerMenuToggle from '../HamburgerMenu/HamburgerMenuToggle';
import {
  useMenuStore,
  useNotificationStore,
  useProfileStore,
} from '../HamburgerMenu/zustand/UseMenuStore';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import LanguageAndCurrencySelector from './LanguageAndCurrencySelector/LanguageAndCurrencySelector';
import UserProfile from './UserProfile/UserProfile';
import UserProfileButton from './UserProfile/UserProfileButton';
import Notifications from './Notifications/Notifications';
import NotificationsButtton from './Notifications/NotificationsButtton';

export default function Header() {
  const {isOpen} = useMenuStore();
  const {isOpened} = useProfileStore();
  const {showNotifications} = useNotificationStore();

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
        zIndex: 10000,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 0,
          marginLeft: 20,
          zIndex: 10000,
          marginTop: 5,
        }}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <View
        style={{
          height: 60,
          left: 60,
          width: 100,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'flex-start',
          top: 10,
        }}>
        <LanguageAndCurrencySelector />
      </View>
      <View
        style={{
          height: 60,
          width: 100,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'flex-end',
          top: 10,
        }}>
        <NotificationsButtton />
      </View>
      <View
        style={{
          height: 60,
          right: 60,
          width: 100,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: 10,
        }}>
        <UserProfileButton />
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
      <View style={[slideAnimation, {position: 'absolute', top: 0}]}>
        {isOpen ? <HamburgerMenu /> : null}
      </View>
      <View
        style={{
          top: 80,
          position: 'absolute',
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 20,
          paddingHorizontal: 20,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}>
        {isOpened ? <UserProfile /> : null}
      </View>
      <View
        style={{
          top: 80,
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 20,
          paddingHorizontal: 20,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}>
        {showNotifications ? <Notifications /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    width: 32,
    height: 32,
  },
});
