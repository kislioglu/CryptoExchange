import {View, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React from 'react';
import {useMenuStore} from './zustand/UseMenuStore';

export default function HamburgerMenuToggle() {
  const {topLine, bottomLine, toggleMenu} = useMenuStore();
  return (
    <View>
      <View
        style={{
          height: 40,
          width: 40,
          zIndex: 10,
          backgroundColor: '#fff',
        }}>
        <View style={styles.headerView}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
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
