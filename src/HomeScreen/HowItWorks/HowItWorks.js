import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function HowItWorks() {
  return (
    <View
      style={{
        height: 500,
      }}>
      <View style={styles.captionView}>
        <Text style={styles.captionText}>How it work</Text>
        <Text style={styles.lowerCaptionText}>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.eachStepView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-2.png')}
          />
          <View>
            <Text style={styles.stepNumberText}>Step 1</Text>
            <Text style={styles.functionText}>Download</Text>
            <Text style={styles.functionExplanationText}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </Text>
          </View>
        </View>
        <View style={styles.eachStepView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-3.png')}
          />
          <View>
            <Text style={styles.stepNumberText}>Step 2</Text>
            <Text style={styles.functionText}>Connect Wallet</Text>
            <Text style={styles.functionExplanationText}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </Text>
          </View>
        </View>
        <View style={styles.eachStepView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-1.png')}
          />
          <View>
            <Text style={styles.stepNumberText}>Step 3</Text>
            <Text style={styles.functionText}>Start Trading</Text>
            <Text style={styles.functionExplanationText}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </Text>
          </View>
        </View>
        <View style={styles.eachStepView}>
          <Image
            style={styles.cardImg}
            source={require('../../../assets/card-pic-4.png')}
          />
          <View>
            <Text style={styles.stepNumberText}>Step 4</Text>
            <Text style={styles.functionText}>Earn Money</Text>
            <Text style={styles.functionExplanationText}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  captionView: {
    alignItems: 'center',
    marginVertical: 50,
    gap: 20,
  },
  captionText: {
    fontWeight: 'bold',
    fontSize: 32,
    width: '50%',
    color: '#000',
    textAlign: 'center',
  },
  lowerCaptionText: {
    color: '#777e90',
    fontWeight: '500',
    width: '63%',
    textAlign: 'center',
  },
  eachStepView: {
    width: 280,
    marginLeft: 20,
  },
  cardImg: {
    width: 80,
    height: 80,
    marginLeft: 5,
    marginBottom: 20,
  },
  stepNumberText: {
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 20,
  },
  functionText: {
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 10,
    color: '#000',
  },
  functionExplanationText: {
    width: '80%',
    textAlign: 'left',
    color: '#000',
    fontWeight: '500',
  },
});
