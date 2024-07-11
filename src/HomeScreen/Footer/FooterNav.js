import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image, StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Contact from './Contact';
import Newsletter from './Newsletter';

export default function FooterNav() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Exchange', value: 'exchange'},
    {label: 'Buy Crypto', value: 'buyCrypto'},
    {label: 'Market', value: 'market'},
    {label: 'Learn Crypto', value: 'learnCrypto'},
    {label: 'Contact', value: 'contact'},
  ]);

  const opacityValues = items.map(() => useSharedValue(0));

  const animatedStyles = opacityValues.map(opacity =>
    useAnimatedStyle(() => ({
      opacity: opacity.value,
    })),
  );

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      opacityValues.forEach((opacity, index) => {
        opacity.value = withDelay(
          index * 100,
          withTiming(1, {
            duration: 300,
            easing: Easing.out(Easing.quad),
          }),
        );
      });
    } else {
      opacityValues.forEach(opacity => {
        opacity.value = withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.quad),
        });
      });
    }
  };

  return (
    <View>
      <View style={styles.componyLogoAndName}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.companyNameText}>Coiner</Text>
      </View>

      <View>
        <View>
          <TouchableOpacity
            style={styles.footerNavBtn}
            onPress={() => handleOpen()}>
            <Text style={styles.footerNavText}>FOOTER NAV</Text>
            <Image source={require('../../../assets/down.png')} />
          </TouchableOpacity>
        </View>
        {open && (
          <View>
            {items.map((item, index) => (
              <Animated.View
                key={index}
                style={[styles.item, animatedStyles[index]]}>
                <TouchableOpacity>
                  <Text style={styles.itemBtnText}>{item.label}</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        )}
      </View>
      <View style={styles.borderBottom} />
      <Contact />
      <Newsletter />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingBottom: 20,
    width: '90%',
    marginLeft: 20,
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
    marginVertical: 20,
    borderColor: '#e6e8ec',
  },
});
