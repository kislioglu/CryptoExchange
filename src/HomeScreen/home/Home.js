import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Trends from '../marketTrends/Trends';

export default function Home() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={styles.logoView}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.companyNameText}>Coiner</Text>
      </View>
      <View style={styles.sloganView}>
        <View style={styles.captionView}>
          <Text style={styles.captionText}>Buy & sell crypto in minutes</Text>
        </View>
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>
            Trade Bitcoin, Etherium, USDT and the top altcoins on the legendary
            crypto asset exchange.
          </Text>
        </View>
      </View>
      <View style={styles.navigateButtonView}>
        <TouchableOpacity style={styles.navigateButton} activeOpacity={0.3}>
          <Text style={styles.navigateButtonText}>Get started now</Text>
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor: '#fff'}}>
        <Trends />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 40,
    marginLeft: 20,
  },
  logoImg: {
    width: 32,
    height: 32,
  },
  companyNameText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  sloganView: {
    gap: 20,
    width: '100%',
    marginLeft: 20,
    marginTop: 40,
  },
  captionView: {
    width: '60%',
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 44,
    color: '#23262f',
  },
  explanationView: {
    width: '75%',
  },
  explanationText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#777e90',
    letterSpacing: 0.2,
  },
  navigateButtonView: {
    width: 150,
    height: 40,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#3772ff',
  },
  navigateButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  navigateButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});
