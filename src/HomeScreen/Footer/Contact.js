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

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '43252 Borer Mountains'},
    {label: 'Zackerychester'},
    {label: 'Bahamas'},
    {label: '732-528-4945'},
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
      <View>
        <TouchableOpacity
          style={styles.captionBtn}
          onPress={() => handleOpen()}>
          <Text style={styles.captionText}>Contact</Text>
        </TouchableOpacity>
        {open && (
          <View>
            {items.map((item, index) => (
              <Animated.View
                key={index}
                style={[styles.item, animatedStyles[index]]}>
                <Text style={styles.itemText}>• {item.label}</Text>
              </Animated.View>
            ))}
          </View>
        )}
      </View>
      <View style={styles.borderBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingBottom: 20,
    width: '90%',
    marginLeft: 20,
  },
  captionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  captionText: {
    fontWeight: 'bold',
    color: '#000',
  },
  itemText: {
    fontWeight: '400',
    color: '#000',
  },
  borderBottom: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#e6e8ec',
  },
});
