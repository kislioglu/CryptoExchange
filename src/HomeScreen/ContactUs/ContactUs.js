import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {globalCss} from '../../../styles/globalCss';

export default function ContactUs() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.captionView}>
        <Text style={styles.captionText}>
          Become a crypto trader in seconds
        </Text>
        <Text style={[styles.lowerCaptionText, globalCss.textColorGrey]}>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsView}>
        <View style={styles.eachCardView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-1.png')}
          />
          <Text style={styles.coreText}>Core Value 01</Text>
          <Text style={[styles.explanationText, globalCss.textColorGrey]}>
            We realize ideas from simple to complex, everything becomes easy to
            use and reach the most potential customers.
          </Text>
        </View>
        <View style={styles.eachCardView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-2.png')}
          />
          <Text style={styles.coreText}>Core Value 02</Text>
          <Text style={[styles.explanationText, globalCss.textColorGrey]}>
            We realize ideas from simple to complex, everything becomes easy to
            use and reach the most potential customers.
          </Text>
        </View>
        <View style={styles.eachCardView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-3.png')}
          />
          <Text style={styles.coreText}>Core Value 03</Text>
          <Text style={[styles.explanationText, globalCss.textColorGrey]}>
            We realize ideas from simple to complex, everything becomes easy to
            use and reach the most potential customers.
          </Text>
        </View>
      </ScrollView>
      <View style={[styles.contactUsView, globalCss.btnPrimary]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactUsContent')}
          style={styles.contactUsButton}>
          <Text style={[styles.contactUsText, globalCss.textColorWhite]}>
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  captionView: {
    marginTop: 50,
    gap: 20,
    marginLeft: 20,
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#000',
    width: '80%',
  },
  lowerCaptionText: {
    fontWeight: '500',
    width: '80%',
  },
  cardsView: {
    marginTop: 30,
    marginLeft: 20,
  },
  eachCardView: {
    backgroundColor: '#fff',
    height: 500,
    width: 320,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    width: 120,
    height: 120,
    bottom: 40,
  },
  coreText: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  explanationText: {
    paddingHorizontal: 40,
    textAlign: 'center',
    fontWeight: '500',
  },
  contactUsView: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 50,
    borderRadius: 30,
  },
  contactUsButton: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactUsText: {
    fontWeight: 'bold',
  },
});
