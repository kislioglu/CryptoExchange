import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {globalCss} from '../../../../styles/globalCss';

export default function UserProfile() {
  return (
    <View style={{gap: 10}}>
      <TouchableOpacity style={[styles.eachButton, {marginTop: 20}]}>
        <Image
          style={styles.image}
          source={require('../../../../assets/profile.png')}
        />
        <View style={styles.btnTextsView}>
          <Text style={styles.btnCaption}>Profile</Text>
          <Text style={[styles.btnInfoText, globalCss.textColorGrey]}>
            Important account details
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachButton}>
        <Image
          style={styles.image}
          source={require('../../../../assets/referral.png')}
        />
        <View style={styles.btnTextsView}>
          <Text style={styles.btnCaption}>Referrals</Text>
          <Text style={[styles.btnInfoText, globalCss.textColorGrey]}>
            Invite your friends and earn rewards
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachButton}>
        <Image
          style={styles.image}
          source={require('../../../../assets/lock.png')}
        />
        <View style={styles.btnTextsView}>
          <Text style={styles.btnCaption}>2FA security</Text>
          <Text style={[styles.btnInfoText, globalCss.textColorGrey]}>
            Setup 2FA for more security
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachButton}>
        <Image
          style={styles.image}
          source={require('../../../../assets/settings.png')}
        />
        <View style={styles.btnTextsView}>
          <Text style={styles.btnCaption}>Settings</Text>
          <Text style={[styles.btnInfoText, globalCss.textColorGrey]}>
            View additional settings
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachButton}>
        <Image
          style={styles.image}
          source={require('../../../../assets/dark_light.png')}
        />
        <View style={styles.btnTextsView}>
          <Text style={styles.btnCaption}>Dark mode</Text>
          <Text style={[styles.btnInfoText, globalCss.textColorGrey]}>
            Switch dark/light mode
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.eachButton, {borderBottomWidth: 0}]}>
        <Image
          style={styles.image}
          source={require('../../../../assets/logout.png')}
        />
        <View style={styles.btnTextsView}>
          <Text style={styles.btnCaption}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  eachButton: {
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    paddingTop: 5,
    height: 60,
    alignItems: 'center',
    borderColor: '#E6E8EC',
  },
  image: {
    alignSelf: 'flex-start',
    width: 20,
    height: 20,
    tintColor: '#23262f',
  },
  btnTextsView: {
    alignSelf: 'flex-start',
  },
  btnCaption: {
    fontWeight: 'bold',
    color: '#23262f',
    fontSize: 16,
  },
  btnInfoText: {
    fontSize: 12,
  },
});
