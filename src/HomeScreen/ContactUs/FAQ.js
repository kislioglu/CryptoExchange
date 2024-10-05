import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('general');
  const [dropdownItems, setdropdownItems] = useState([
    {label: 'General', value: 'general'},
    {label: 'Support', value: 'support'},
    {label: 'Hosting', value: 'hosting'},
    {label: 'Product', value: 'product'},
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const height = useSharedValue(0);

  const toggleExpand = index => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      height.value = withTiming(0, {duration: 500});
    } else {
      setExpandedIndex(index);
      height.value = withTiming(260, {duration: 500});
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.captionText}>Frequently asked questions(FAQ)</Text>
      <View>
        <DropDownPicker
          style={styles.dropDown}
          dropDownContainerStyle={styles.dropdownContainer}
          open={open}
          value={value}
          items={dropdownItems}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setdropdownItems}
          listMode="SCROLLVIEW"
        />
      </View>

      <View style={{marginTop: 25}}>
        {new Array(5).fill(null).map((_, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => toggleExpand(index)}
              style={styles.button}>
              <Text style={styles.buttonText}>{index + 1}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  marginLeft: 20,
                }}>
                <Text style={styles.buttonText}>How does it work</Text>
                <Image source={require('../../../assets/down.png')} />
              </View>
            </TouchableOpacity>
            {expandedIndex === index ? (
              <Animated.View style={[styles.textContainer, animatedStyle]}>
                <Text style={styles.text}>
                  The Stacks series of products: Stacks: Landing Page Kit,
                  Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                  production-ready library of stackable content blocks built in
                  React Native. Mix-and-match dozens of responsive elements to
                  quickly configure your favorite landing page layouts or hit
                  the ground running with 10 pre-built templates, all in light
                  or dark mode. "
                </Text>
              </Animated.View>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    width: '70%',
    color: '#000',
    alignSelf: 'center',
  },
  dropDown: {
    width: '80%',
    marginTop: 35,
    borderColor: '#e6e8ec',
    borderWidth: 2,
    backgroundColor: '#fcfcfd',
    alignSelf: 'center',
  },
  dropdownContainer: {
    width: '80%',
    borderColor: '#e6e8ec',
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: '#e6e8ec',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  textContainer: {
    marginTop: 10,
    padding: 10,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    width: '80%',
    lineHeight: 24,
    letterSpacing: 0.3,
    color: '#777e90',
  },
});
