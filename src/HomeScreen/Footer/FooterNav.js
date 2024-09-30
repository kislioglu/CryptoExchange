import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Contact from './Contact';
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import {useNavigation} from '@react-navigation/native';

export default function FooterNav() {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const height = useSharedValue(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    height.value = isExpanded
      ? withTiming(0, {duration: 500})
      : withTiming(210, {duration: 500});
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View>
      <View style={styles.componyLogoAndName}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.companyNameText}>Bitcloud</Text>
      </View>

      <View>
        <View>
          <TouchableOpacity
            style={styles.footerNavBtn}
            onPress={() => toggleExpand()}>
            <Text style={styles.footerNavText}>FOOTER NAV</Text>
            <Image source={require('../../../assets/down.png')} />
          </TouchableOpacity>
        </View>
        {isExpanded && (
          <View>
            <Animated.View style={[styles.item, animatedStyle]}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TodaysTrendCurrencyPrices')
                }>
                <Text style={styles.itemBtnText}>Exchange</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TodaysTrendCurrencyPrices')
                }>
                <Text style={styles.itemBtnText}>Buy Crypto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TodaysTrendCurrencyPrices')
                }>
                <Text style={styles.itemBtnText}>Market</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ContactUsContent')
                }>
                <Text style={styles.itemBtnText}>Learn Crypto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ContactUsContent')
                }>
                <Text style={styles.itemBtnText}>Contact</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </View>
      <View style={styles.borderBottom} />
      <Contact />
      <Newsletter />
      <Copyright />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingBottom: 20,
    width: '90%',
    marginLeft: 20,
    gap: 20,
  },
  componyLogoAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    marginLeft: 20,
  },
  logoImg: {
    width: 32,
    height: 32,
  },
  companyNameText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
    marginLeft: 5,
  },
  footerNavBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerNavText: {
    fontWeight: 'bold',
    color: '#000',
  },
  itemBtnText: {
    fontWeight: 'bold',
    color: '#777E90',
  },
  borderBottom: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    borderColor: '#e6e8ec',
  },
});
