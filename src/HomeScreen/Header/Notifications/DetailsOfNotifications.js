import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {staticNotifications} from '../../../../staticDatas/Notifications';
import {globalCss} from '../../../../styles/globalCss';
import FooterNav from '../../Footer/FooterNav';
import NotificationFilter from './NotificationFilter';

export default function DetailsOfNotifications() {
  return (
    <View style={{flex: 1, backgroundColor: '#f4f5f6'}}>
      <ScrollView>
        <View style={{marginTop: 20, marginHorizontal: 40}}>
          <Text
            style={[
              globalCss.textColorKindaBlack,
              {fontSize: 32, fontWeight: 'bold', marginVertical: 30},
            ]}>
            Notifications
          </Text>
          <View style={{flexDirection: 'row', gap: 20, marginBottom: 20}}>
            <TouchableOpacity
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#e6e8ec',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  globalCss.textColorKindaBlack,
                  {fontWeight: 'bold', fontSize: 15},
                ]}>
                Mark all as read
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 20,
                borderColor: '#e6e8ec',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  globalCss.textColorKindaBlack,
                  {fontWeight: 'bold', fontSize: 15},
                ]}>
                Clear all
              </Text>
            </TouchableOpacity>
          </View>
          
          <View>
            <NotificationFilter
              filters={staticNotifications.map(st => st.type)}
            />
          </View>
        </View>

        <View style={{backgroundColor: '#fff'}}>
          <FooterNav />
        </View>
      </ScrollView>
    </View>
  );
}
