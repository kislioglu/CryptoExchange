import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useProfileStore} from '../../HamburgerMenu/zustand/UseMenuStore';

export default function UserProfileButton() {
  const {toggleMenu} = useProfileStore();
  return (
    <View>
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          borderRadius: 50,
          width: 40,
          height: 40,
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../../../assets/avatar-user.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
}
