import {View, StyleSheet, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function Welcome() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);
  useEffect(() => {
    sv.value = withRepeat(withTiming(1, {duration, easing}), -1);
  }, []);

  const duration = 2000;
  const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, {duration, easing}), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sv.value * 360}deg`}],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle]}>
        <Image source={require('../assets/logo.png')} />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'black',
  },
});
