import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SupportTopic() {
  const [openFirstTopics, setOpenFirstTopics] = useState(false);
  const [openSecondTopics, setOpenSecondTopics] = useState(false);
  const [firstTopicsValue, setFirstTopicsValue] = useState('bitcoinFees');
  const [secondTopicsValue, setSecondTopicsValue] = useState('bothTopic');
  const [firstTopic, setFirstTopic] = useState([
    {label: 'How a question about bitcoin fees?', value: 'bitcoinFees'},
    {label: 'How a question about ethereum fees?', value: 'ethereumFees'},
    {label: 'How a question about dogcoin fees?', value: 'dogcoinFees'},
  ]);
  const [secondTopic, setSecondTopic] = useState([
    {label: 'Transactions and Spending', value: 'bothTopic'},
    {label: 'Transactions', value: 'transaction'},
    {label: 'Spending', value: 'spending'},
  ]);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [topicBtn, setTopicBtn] = useState('Wallet');

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
    <View style={{backgroundColor: '#f8f8f9', marginTop: 70}}>
      <View style={{marginHorizontal: 30, marginVertical: 30}}>
        <Text style={styles.inputCaption}>SELECT A TOPIC</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => setTopicBtn('Wallet')}
            style={[
              styles.topicsBtn,
              topicBtn === 'Wallet'
                ? {borderWidth: 2, borderColor: '#3772ff'}
                : null,
            ]}>
            <Text style={styles.topicsName}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTopicBtn('Exchange')}
            style={[
              styles.topicsBtn,
              topicBtn === 'Exchange'
                ? {borderWidth: 2, borderColor: '#3772ff'}
                : null,
            ]}>
            <Text style={styles.topicsName}>Exchange</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{marginTop: 30}}>
            <Text style={styles.inputCaption}>WHAT IS YOUR ISSUE ABOUT?</Text>
            <DropDownPicker
              style={styles.dropDown}
              dropDownContainerStyle={styles.dropdownContainer}
              open={openFirstTopics}
              value={firstTopicsValue}
              items={firstTopic}
              setOpen={setOpenFirstTopics}
              setValue={setFirstTopicsValue}
              setItems={setFirstTopic}
              listMode="SCROLLVIEW"
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.inputCaption}>WHAT IS YOUR ISSUE ABOUT?</Text>
            <DropDownPicker
              style={styles.dropDown}
              dropDownContainerStyle={styles.dropdownContainer}
              open={openSecondTopics}
              value={secondTopicsValue}
              items={secondTopic}
              setOpen={setOpenSecondTopics}
              setValue={setSecondTopicsValue}
              setItems={setSecondTopic}
              listMode="SCROLLVIEW"
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.inputCaption}>EMAIL ADRESS</Text>
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
          <View style={{marginTop: 30}}>
            <Text style={styles.inputCaption}>SUBJECT</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.inputCaption}>MESSAGE</Text>
            <View style={[styles.inputView, {height: 150}]}>
              <TextInput
                style={[styles.input, {textAlignVertical: 'top'}]}
                placeholderTextColor={'#777e90'}
                placeholder="Say something"
                autoCapitalize="none"
                multiline={true}
                maxLength={500}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.sendMsgBtn}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              Send message
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    width: '100%',
    marginTop: 10,
    borderColor: '#e6e8ec',
    borderWidth: 1,
    backgroundColor: '#fcfcfd',
    alignSelf: 'center',
    zIndex: 15,
  },
  dropdownContainer: {
    width: '100%',
    borderColor: '#e6e8ec',
    alignSelf: 'center',
    marginTop: 20,
  },
  inputCaption: {
    fontWeight: 'bold',
    color: '#b1b5c3',
    fontSize: 13,
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#e6e8ec',
    borderRadius: 15,
    height: 50,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  input: {
    paddingHorizontal: 10,
    fontWeight: '600',
    flex: 1,
    height: '100%',
    color: '#777e90',
  },
  topicsBtn: {
    width: '48%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicsName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  sendMsgBtn: {
    width: 140,
    height: 40,
    backgroundColor: '#3772ff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    alignSelf: 'flex-end',
  },
});
