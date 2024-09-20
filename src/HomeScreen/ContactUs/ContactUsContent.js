import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import FAQ from './FAQ';
import FooterNav from '../Footer/FooterNav';
import SupportTopic from './SupportTopic';

export default function ContactUsContent() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.topPageTextView}>
        <Text style={styles.firstText}>SAVE YOUR TIME WITH STACKS</Text>
        <Text style={styles.secondText}>How can we help</Text>
        <Text style={styles.thirdText}>
          A creative agency that lead and inspire
        </Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.input}
          placeholder="Search anything"
          autoCapitalize="none"
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.rightArrowView}>
          <Image
            style={styles.rightArrowImg}
            source={require('../../../assets/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contactbgView}>
        <Image
          style={styles.contactbgImg}
          source={require('../../../assets/contactbg.png')}
        />
        <Text style={styles.contactbgText}>
          Before asking for an answer, you may find it in our learn crypto
          center
        </Text>
      </View>
      <View>
        <FAQ />
      </View>
      <View>
        <SupportTopic />
      </View>
      <View>
        <FooterNav />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  topPageTextView: {
    gap: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  firstText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondText: {
    fontWeight: 'bold',
    fontSize: 34,
    color: '#000',
    width: '60%',
  },
  thirdText: {
    fontWeight: '500',
    fontSize: 16,
    width: '70%',
  },
  textInputView: {
    width: '90%',
    flexDirection: 'row',
    borderColor: '#e6e8ec',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between',
    paddingRight: 10,
    marginLeft: 20,
    marginTop: 40,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  rightArrowView: {
    width: 30,
    height: 30,
    backgroundColor: '#3772ff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightArrowImg: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  contactbgView: {
    alignItems: 'center',
    marginTop: 10,
  },
  contactbgImg: {
    width: 350,
    height: 350,
  },
  contactbgText: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    letterSpacing: 0.3,
  },
});
