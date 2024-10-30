import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {staticNotifications} from '../../../../staticDatas/Notifications';
import {globalCss} from '../../../../styles/globalCss';
import {useNavigation} from '@react-navigation/native';
import {useNotificationStore} from '../../HamburgerMenu/zustand/UseMenuStore';

export default function Notifications() {
  const screenHeight = Dimensions.get('window');
  const navigation = useNavigation();

  const {toggleMenu} = useNotificationStore();
  const notificationOnPress = () => {
    navigation.navigate('DetailsOfNotifications');
    toggleMenu();
  };
  return (
    <View
      style={{
        height: screenHeight.height / 1.2,
      }}>
      <Text
        style={{
          color: '#23262f',
          fontWeight: 'bold',
          fontSize: 24,
          paddingVertical: 5,
          marginVertical: 10,
        }}>
        Notifications
      </Text>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}>
        {staticNotifications.map((notification, index) => (
          <TouchableOpacity
            onPress={() => notificationOnPress()}
            style={[
              {
                gap: 10,
                borderBottomWidth:
                  index !== staticNotifications.length - 1 ? 1 : 0,
                height: 80,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#e6e8ec',
              },
            ]}
            key={index}>
            <View style={{gap: 5}}>
              <Text
                style={{
                  color: '#23262f',
                  fontWeight: 'bold',
                }}>
                {notification.notification}
              </Text>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={globalCss.textColorGrey}>{notification.date}</Text>
                <Text style={globalCss.textColorGrey}>
                  {notification.hours}
                </Text>
              </View>
            </View>
            {!notification.isSeen ? (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: '#58bd7d',
                  borderRadius: 20,
                }}
              />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
