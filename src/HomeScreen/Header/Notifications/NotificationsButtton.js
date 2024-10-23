import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNotificationStore} from '../../HamburgerMenu/zustand/UseMenuStore';
import {staticNotifications} from '../../../../staticDatas/Notifications';
import {useEffect} from 'react';

export default function NotificationsButtton() {
  const [hasUnread, setHasUnread] = useState(false);
  const {toggleMenu} = useNotificationStore();
  useEffect(() => {
    const unreadExists = staticNotifications.some(
      notification => !notification.isSeen,
    );
    setHasUnread(unreadExists);
  }, []);

  return (
    <View>
      <View
        style={[
          hasUnread
            ? {
                width: 10,
                height: 10,
                borderRadius: 20,
                position: 'absolute',
                right: 0,
                backgroundColor: '#58bd7d',
              }
            : null,
        ]}
      />
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          borderRadius: 50,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 28, height: 28}}
          source={require('../../../../assets/notification.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
