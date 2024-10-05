import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

export default function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.copyrightText}>
        Copyright @ 2021 Ul8 LLC. All rights reserved
      </Text>

      <View style={styles.socialsView}>
        <TouchableOpacity style={styles.eachSocialBtn}>
          <Image
            style={styles.eachImg}
            source={require('../../../assets/socials/facebook.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eachSocialBtn}>
          <Image
            style={styles.eachImg}
            source={require('../../../assets/socials/twitter.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eachSocialBtn}>
          <Image
            style={styles.eachImg}
            source={require('../../../assets/socials/instagram.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eachSocialBtn}>
          <Image
            style={styles.eachImg}
            source={require('../../../assets/socials/dribble.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eachSocialBtn}>
          <Image
            style={styles.eachImg}
            source={require('../../../assets/socials/behance.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:35,
    height: 200,
  },
  copyrightText: {
    alignSelf: 'center',
    fontWeight: '400',
    color: '#777e90',
  },
  socialsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 20,
  },
  eachSocialBtn: {
    width: 40,
    height: 40,
  },
  eachImg: {
    tintColor: '#777e90',
    
  },
});
