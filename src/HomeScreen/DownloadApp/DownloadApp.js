import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default function DownloadApp() {
  return (
    <View>
      <Image
        style={styles.mainImg}
        source={require('../../../assets/downloadscreen.png')}
      />
      <View style={styles.captionView}>
        <Text style={styles.captionText}>Trade anywhere</Text>
        <Text style={styles.lowerCaptionText}>
          Anytime, anywhere, Trade crypto on your terms.
        </Text>
      </View>

      <View style={styles.downloadBtnView}>
        <TouchableOpacity activeOpacity={0.7} style={styles.downloadBtn}>
          <View style={styles.appImgView}>
            <Image
              style={[styles.appImg, {tintColor: '#fff'}]}
              source={require('../../../assets/appleLogo.png')}
            />
          </View>
          <View>
            <Text style={{color: '#777e90', fontWeight: '500'}}>
              Download from
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
              Appstore
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.downloadBtn}>
          <View style={styles.appImgView}>
            <Image
              style={styles.appImg}
              source={require('../../../assets/googleplay.png')}
            />
          </View>
          <View>
            <Text style={{color: '#777e90', fontWeight: '500'}}>
              Download from
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
              Google Play
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.downloadBtn, {borderBottomWidth: 0}]}>
          <View style={styles.appImgView}>
            <Image
              style={[styles.appImg, {tintColor: '#fff'}]}
              source={require('../../../assets/appleLogo.png')}
            />
          </View>
          <View>
            <Text style={{color: '#777e90', fontWeight: '500'}}>
              Download from
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
              Mac OS
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainImg: {
    width: 340,
    height: 340,
    alignSelf: 'center',
    marginLeft: 20,
  },
  captionView: {
    marginLeft: 20,
    gap: 20,
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 32,
    width: '50%',
    color: '#000',
  },
  lowerCaptionText: {
    color: '#777e90',
    fontWeight: '500',
    width: '65%',
  },
  downloadBtnView: {
    marginTop: 10,
  },
  downloadBtn: {
    marginLeft: 20,
    marginVertical: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    height: 80,
    width: '90%',
    alignItems: 'center',
    gap: 20,
    borderBottomWidth: 1,
    borderColor: '#e6e8ec',
  },
  appImgView: {
    width: 45,
    height: 45,
    backgroundColor: '#23262f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  appImg: {
    width: 20,
    height: 20,
  },
});
