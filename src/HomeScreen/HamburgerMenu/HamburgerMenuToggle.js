import {View, Image, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import HamburgerMenu from './HamburgerMenu';

export default function HamburgerMenuToggle() {
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
      {isOpen ? <HamburgerMenu /> : null}
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
