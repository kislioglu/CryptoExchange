import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {globalCss} from '../../../styles/globalCss';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = text => {
    setEmail(text);
    if (!validateEmail(text)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  return (
    <View>
      <View>
        <View style={styles.caption} onPress={() => handleOpen()}>
          <Text style={styles.captionText}>Newsletter</Text>
        </View>
        <View style={styles.subscribeView}>
          <Text style={styles.subscribeText}>
            Subscribe to our newsletter to get more free design course and
            resource.
          </Text>
          <View style={styles.textInputView}>
            <TextInput
              style={[styles.input, globalCss.textColorGrey]}
              placeholder="Enter your email"
              placeholderTextColor={'#777e90'}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={handleChange}
            />
            <TouchableOpacity
              style={[styles.rightArrowView, globalCss.btnPrimary]}>
              <Image
                style={styles.rightArrowImg}
                source={require('../../../assets/rightArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {email !== '' && error ? (
            <Text style={styles.error}>{error}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.borderBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 30,
  },
  captionText: {
    fontWeight: 'bold',
    color: '#000',
  },
  subscribeView: {
    marginLeft: 20,
    gap: 30,
  },
  subscribeText: {
    width: '50%',
    fontWeight: '600',
    color: '#000',
  },
  textInputView: {
    width: 250,
    flexDirection: 'row',
    borderColor: '#e6e8ec',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  rightArrowView: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  rightArrowImg: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  error: {
    color: 'red',
  },
  borderBottom: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#e6e8ec',
    marginTop: 30,
  },
});
