import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    isPasswordMatching();
  }, [password, confirmPassword]);

  const handleChange = text => {
    setEmail(text);
    if (!validateEmail(text)) {
      setError('Geçerli bir e-posta adresi giriniz');
    } else {
      setError('');
    }
  };

  const isPasswordMatching = () => {
    if (password === confirmPassword) {
      setIsPasswordMatched(true);
    } else {
      setIsPasswordMatched(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.companyNameAndLogo}>
          <Image
            style={styles.companyLogo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.companyName}>Coiner</Text>
        </View>
        <View style={styles.loginRedirectView}>
          <Text style={styles.haveAnAccountText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpCaptionView}>
          <Text style={styles.signUpCaption}>Sign up</Text>
          <Text style={styles.signUpLowerCaption}>
            Use Your OpenID to Sign up
          </Text>
        </View>

        <View style={styles.googleAndAppleBtnView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.googleAndAppleBtn, {backgroundColor: '#3772ff'}]}>
            <Image
              style={styles.googleAndAppleImg}
              source={require('../../assets/googleMail.png')}
            />
            <Text style={styles.googleAndAppleText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.googleAndAppleBtn, {backgroundColor: '#23262f'}]}>
            <Image
              style={styles.googleAndAppleImg}
              source={require('../../assets/appleFullInside.png')}
            />
            <Text style={styles.googleAndAppleText}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.border} />
      <View>
        <Text style={styles.continueEmail}>Or continue with email</Text>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputCaption}>EMAIL</Text>
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
            </View>
          </View>
          <View>
            <Text style={styles.inputCaption}>PASSWORD</Text>
            <View style={styles.inputView}>
              <View style={styles.paswordInsideView}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={'#777e90'}
                  placeholder="Enter your Password"
                  autoCorrect={false}
                  value={password}
                  secureTextEntry={hidePassword}
                  textContentType="password"
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}>
                  <Image
                    style={styles.eyeImg}
                    source={require('../../assets/passwordEye.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.inputCaption}>CONFIRM PASSWORD</Text>
            <View style={styles.inputView}>
              <View style={styles.paswordInsideView}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={'#777e90'}
                  placeholder="Enter your Password"
                  autoCorrect={false}
                  value={confirmPassword}
                  secureTextEntry={hideConfirmPassword}
                  textContentType="password"
                  onChangeText={aaa => setConfirmPassword(aaa)}
                />
                <TouchableOpacity
                  onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
                  <Image
                    style={styles.eyeImg}
                    source={require('../../assets/passwordEye.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {isPasswordMatched === false ? (
            <Text>Password does not matched!</Text>
          ) : null}
        </View>
        <View style={styles.userPolicyView}>
          <CheckBox
            style={styles.checkBox}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text style={styles.text}>
            By signing up I agree that I'm 18 years of age or older, to the{' '}
            <Text style={[styles.text, {color: '#23262f'}]}>
              Use Agreements, Privacy Policy, Cookie Policy, E-Sign Consent.
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign up</Text>
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
    height: 290,
    // backgroundColor: 'red',
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
  companyName: {
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
  loginText: {
    color: '#3772ff',
    fontWeight: 'bold',
  },
  signUpCaptionView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
  signUpCaption: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
  },
  signUpLowerCaption: {
    fontWeight: '500',
    marginBottom: 10,
    color: '#b1b5c3',
  },
  googleAndAppleBtnView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  googleAndAppleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 50,
    width: 160,
    borderRadius: 30,
    justifyContent: 'center',
  },
  googleAndAppleImg: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  googleAndAppleText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 16,
  },
  border: {
    borderBottomWidth: 2,
    width: '85%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
  },
  continueEmail: {
    marginVertical: 20,
    alignSelf: 'center',
    color: '#b1b5c3',
  },
  inputContainer: {
    marginHorizontal: 20,
    gap: 10,
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#b1b5c3',
    borderRadius: 15,
  },
  inputCaption: {
    fontWeight: 'bold',
    color: '#b1b5c3',
    marginBottom: 5,
  },
  input: {
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  paswordInsideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyeImg: {
    marginRight: 10,
    tintColor: '#777e90',
  },
  userPolicyView: {
    marginLeft: 20,
    flexDirection: 'row',
    marginVertical: 15,
    width: '70%',
  },
  checkBox: {
    width: 36,
    height: 36,
  },
  text: {
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#b1b5c3',
    marginTop: 5,
  },
  signUpBtn: {
    width: '80%',
    height: 45,
    backgroundColor: '#3772ff',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontWeight: '600',
    color: '#fff',
  },
});
