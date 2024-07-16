import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function PhoneNmbr() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('USA');
  const [items, setItems] = useState([
    {label: '+1', value: 'USA'},
    {label: '+90', value: 'TR'},
    {label: '+7', value: 'RU'},
  ]);

  return (
    <View style={{marginHorizontal: 30, gap: 25}}>
      <View>
        <Text style={styles.inputCaption}>Phone</Text>
        <View style={styles.phoneNmbrView}>
          <View style={{width: '35%', backgroundColor: '#fff', zIndex: 1000}}>
            <DropDownPicker
              style={styles.dropDown}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              listMode="SCROLLVIEW"
              zIndex={1000}
              dropDownContainerStyle={{borderColor: '#b1b5c3'}}
            />
          </View>
          <View style={{width: '60%'}}>
            <TextInput
              style={styles.phoneNmbrInput}
              placeholderTextColor={'#777e90'}
              placeholder="Phone address"
              keyboardType="Phone-address"
              autoCapitalize="none"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.inputCaption}>PASSWORD</Text>
        <View style={styles.passwordView}>
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
                source={require('../../assets/passwordEye.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.forgotPassView}>
        <TouchableOpacity>
          <Text style={styles.scanAndForgotPassText}>Scan to login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
  phoneNmbrView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordView: {
    borderWidth: 2,
    borderColor: '#b1b5c3',
    borderRadius: 15,
    height: 50,
    width: '100%',
  },
  dropDown: {
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderColor: '#b1b5c3',
    borderRadius: 15,
  },
  phoneNmbrInput: {
    paddingHorizontal: 10,
    fontWeight: '600',
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderColor: '#b1b5c3',
    borderRadius: 15,
  },
  input: {
    paddingHorizontal: 10,
    fontWeight: '600',
    flex: 1,
    height: '100%',
    width: '40%',
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
