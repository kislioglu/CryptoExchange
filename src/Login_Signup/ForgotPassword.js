import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = text => {
    setEmail(text);
    if (!validateEmail(text)) {
      setError('Should be e-mail format!');
    } else {
      setError('');
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.companyNameAndLogo}>
          <Image
            style={styles.companyLogo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.captionText}>Coiner</Text>
        </View>
        <View style={styles.loginRedirectView}>
          <Text style={styles.haveAnAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign up for free</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotPassView}>
        <Text style={styles.captionText}>Forgot password</Text>
        <Text style={styles.infoText}>
          For security purposes, no withdrawals are permitted for 24 hours after
          password changed.
        </Text>
      </View>
      <View style={styles.border} />
      <View style={{marginHorizontal: 30}}>
        <Text style={styles.inputCaption}>ENTER THE ACCOUNT EMAIL</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#777e90'}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={handleChange}
          />
          <Image
            style={styles.letterImg}
            source={require('../../assets/letter.png')}
          />
        </View>
        {error ? <Text>{error}</Text> : null}
      </View>
      <View style={styles.btnsView}>
        <TouchableOpacity style={styles.LoginBtn}>
          <Text style={styles.LoginBtnText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={[styles.LoginBtn, {backgroundColor: '#fff'}]}>
          <Text style={[styles.LoginBtnText, {color: '#000'}]}>
            Nevermind, I got it
          </Text>
        </TouchableOpacity>
      </View>
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
  forgotPassView: {
    alignItems: 'center',
    gap: 40,
  },
  infoText: {
    width: '85%',
    textAlign: 'center',
    fontWeight: '500',
  },
  border: {
    borderBottomWidth: 2,
    width: '85%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
    marginVertical: 30,
  },
  inputCaption: {
    fontWeight: 'bold',
    color: '#b1b5c3',
    marginBottom: 10,
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#e6e8ec',
    borderRadius: 15,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    fontWeight: '600',
    flex: 1,
    height: '100%',
  },
  letterImg: {
    marginRight: 10,
  },
  btnsView: {
    alignItems: 'center',
    marginTop: 20,
  },
  LoginBtn: {
    width: '80%',
    height: 45,
    backgroundColor: '#3772ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginBtnText: {
    fontWeight: '600',
    color: '#fff',
  },
});
