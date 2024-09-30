import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Email from './Login_ways/Email';
import PhoneNmbr from './Login_ways/PhoneNmbr';

export default function SignIn() {
  const navigation = useNavigation();

  const [select, setSelect] = useState('email');

  const handleSelect = value => {
    setSelect(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.companyNameAndLogo}>
          <Image
            style={styles.companyLogo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.captionText}>Bitcloud</Text>
        </View>
        <View style={styles.loginRedirectView}>
          <Text style={styles.haveAnAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign up for free</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ensureView}>
        <Text style={styles.captionText}>Sign in to Bitcloud</Text>
        <Text style={styles.ensureText}>
          Please ensure you are visiting the correct url.
        </Text>
        <View style={styles.websiteSecView}>
          <Image
            style={styles.lockImg}
            source={require('../../assets/lock.png')}
          />
          <Text style={[styles.websiteUrlText, {color: '#58bd7d'}]}>
            https://
            <Text style={styles.websiteUrlText}>
              accounts.bitcloud.com/login
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.border} />
      <View style={styles.signInWayView}>
        <TouchableOpacity
          style={[
            styles.signInWayBtn,
            select === 'email' && styles.selectedBtn,
          ]}
          onPress={() => handleSelect('email')}>
          <Text
            style={[
              styles.signInWayText,
              select === 'email' && styles.selectedText,
            ]}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.signInWayBtn,
            select === 'mobile' && styles.selectedBtn,
          ]}
          onPress={() => handleSelect('mobile')}>
          <Text style={[
              styles.signInWayText,
              select === 'mobile' && styles.selectedText,
            ]}>Mobile</Text>
        </TouchableOpacity>
      </View>
      <View>{select === 'email' ? <Email /> : <PhoneNmbr />}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  headerView: {
    height: 180,
  },
  companyNameAndLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  companyLogo: {
    marginVertical: 10,
    marginRight: 5,
    width: 40,
    height: 40,
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
  },
  loginRedirectView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  haveAnAccountText: {
    fontWeight: 'bold',
    color: '#000',
  },
  ensureView: {
    alignItems: 'center',
    gap: 10,
  },
  signUpText: {
    color: '#3772ff',
    fontWeight: 'bold',
  },
  ensureText: {
    fontWeight: '500',
    marginTop: 20,
    color: '#b1b5c3',
    fontSize: 12,
  },
  websiteSecView: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#f4f5f6',
    borderRadius: 20,
    width: 300,
  },
  lockImg: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#58bd7d',
  },
  websiteUrlText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  border: {
    borderBottomWidth: 2,
    width: '85%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
    marginVertical: 30,
  },
  signInWayView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 10,
  },
  signInWayBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  selectedBtn: {
    backgroundColor: '#353945',
  },
  signInWayText: {
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});
