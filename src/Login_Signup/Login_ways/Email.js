import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Email() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

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
  return (
    <View style={{marginHorizontal: 30, gap: 25}}>
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
        {error ? <Text>{error}</Text> : null}
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
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Image
                style={styles.eyeImg}
                source={require('../../../assets/passwordEye.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.forgotPassView}>
        <TouchableOpacity>
          <Text style={styles.scanAndForgotPassText}>Scan to login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.scanAndForgotPassText, {color: '#3772ff'}]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.LoginBtn}>
        <Text style={styles.LoginBtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  inputCaption: {
    fontWeight: 'bold',
    color: '#b1b5c3',
    marginBottom: 10,
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#b1b5c3',
    borderRadius: 15,
    height: 50,
  },
  input: {
    paddingHorizontal: 10,
    fontWeight: '600',
    flex: 1,
    height: '100%',
    color:'#777e90'
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
  forgotPassView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scanAndForgotPassText: {
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  LoginBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#3772ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  LoginBtnText: {
    fontWeight: '600',
    color: '#fff',
  },
});
