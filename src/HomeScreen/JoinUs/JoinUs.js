import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function JoinUs() {
  const navigation = useNavigation();
  return (
    <View style={styles.componentView}>
      <View style={styles.logoAndTextsView}>
        <View style={styles.logoAndCompanyNameView}>
          <Image
            style={styles.logoImg}
            source={require('../../../assets/logo.png')}
          />
          <Text style={styles.companyNameText}>Coiner</Text>
        </View>
        <Text style={styles.captionText}>
          Stay in the know on crypto with Coiner
        </Text>
        <Text style={styles.lowerCaptionText}>
          A creative agency that lead and inspire
        </Text>
      </View>
      <View style={styles.worldImgView}>
        <Image
          style={styles.worldImg}
          source={require('../../../assets/joinus.png')}
        />
      </View>
      <View style={styles.endOfComponentView}>
        <Text style={styles.miniText}>DESIGN NEWS</Text>
        <Text style={styles.bePartText}>Be Part of our Global Community</Text>
        <Text style={styles.sloganText}>
          Stack solves business problems from simple to complex.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        activeOpacity={0.7}
        style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  componentView: {
    marginTop: 40,
  },
  logoAndTextsView: {
    alignItems: 'center',
    gap: 20,
  },
  logoAndCompanyNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImg: {
    width: 28,
    height: 28,
    marginRight: 5,
  },
  companyNameText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#000',
    width: '60%',
    textAlign: 'center',
  },
  lowerCaptionText: {
    fontWeight: '400',
    color: '#777e90',
    width: '60%',
    textAlign: 'center',
  },
  worldImgView: {
    alignSelf: 'center',
    width: 320,
    height: 320,
  },
  worldImg: {
    width: '100%',
    height: '100%',
  },
  endOfComponentView: {
    alignItems: 'center',
    gap: 10,
  },
  miniText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#777e90',
  },
  bePartText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    width: '60%',
    textAlign: 'center',
  },
  sloganText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#777e90',
    width: '65%',
    textAlign: 'center',
    marginBottom: 20,
  },
  joinButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#e6e8ec',
    borderRadius: 20,
    width: '30%',
    height: 40,
    marginTop: 30,
    marginBottom: 50,
  },
  joinButtonText: {
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
  },
});
