import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {globalCss} from '../../../../styles/globalCss';
import {staticNotifications} from '../../../../staticDatas/Notifications';
import {icons} from '../../../../staticDatas/notificationIconsPath';

export default function NotificationFilter({filters}) {
  const [select, setSelect] = useState(filters.map(() => false));
  const [selected, setSelected] = useState([]);
  const [notificationFilters, setNotificationFilters] = useState(false);
  const openFilterHandle = () => {
    setNotificationFilters(!notificationFilters);
  };

  const filterNotifications = index => {
    const filter = filters[index];
    setSelected(prevSelected => {
      if (prevSelected.includes(filter)) {
        return prevSelected.filter(f => f !== filter);
      } else {
        return [...prevSelected, filter];
      }
    });
  };

  const toggleSelect = index => {
    setSelect(prevSelect =>
      prevSelect.map((item, i) => (i === index ? !item : item)),
    );
    filterNotifications(index);
  };

  const handleAll = boolean => {
    setSelect(filters.map(() => boolean));
    if (boolean) {
      setSelected(filters);
    } else {
      setSelected([]);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => openFilterHandle()}
        style={[globalCss.btnPrimary, {height: 60, borderRadius: 30}]}>
        <Text
          style={[
            globalCss.textColorWhite,
            {fontWeight: 'bold', fontSize: 15},
          ]}>
          Advanced filter
        </Text>
      </TouchableOpacity>

      {notificationFilters ? (
        <View>
          <Text
            style={[
              globalCss.textColorKindaBlack,
              {fontWeight: 'bold', fontSize: 24, marginVertical: 40},
            ]}>
            Filters
          </Text>
          {filters.map((f, index) => (
            <View
              key={index}
              style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <CheckBox
                value={select[index]}
                onValueChange={() => toggleSelect(index)}
                tintColors={{true: '#3772ff', false: '#e6e8ec'}}
              />
              <Text
                style={[
                  globalCss.textColorKindaBlack,
                  {fontWeight: '500', fontSize: 15},
                ]}>
                {f}
              </Text>
            </View>
          ))}
          <View style={{flexDirection: 'row', gap: 20, marginTop: 20}}>
            <TouchableOpacity
              onPress={() => handleAll(true)}
              style={{
                borderWidth: 2,
                borderColor: '#e6e8ec',
                padding: 10,
                borderRadius: 20,
              }}>
              <Text
                style={[globalCss.textColorKindaBlack, {fontWeight: '600'}]}>
                Select all
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleAll(false)}
              style={{
                borderWidth: 2,
                borderColor: '#e6e8ec',
                padding: 10,
                borderRadius: 20,
              }}>
              <Text
                style={[globalCss.textColorKindaBlack, {fontWeight: '600'}]}>
                Unselect all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {staticNotifications.map((notification, index) =>
        selected.map(s =>
          s === notification.type ? (
            <View
              key={index}
              style={{
                top: 10,
                borderBottomWidth: 2,
                borderColor: '#e6e8ec',
                paddingVertical: 40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  gap: 10,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 2,
                    borderRadius: 25,
                    borderColor: '#e6e8ec',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 24, height: 24, tintColor: '#23262f'}}
                    source={icons[notification.type]}
                  />
                </View>
                <View style={{gap: 10, width: '100%'}}>
                  <Text
                    style={[
                      globalCss.textColorKindaBlack,
                      {fontWeight: 'bold', fontSize: 18},
                    ]}>
                    {notification.notification}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                    }}>
                    <Text style={[globalCss.textColorGrey]}>
                      {notification.date}
                    </Text>
                    <Text style={[globalCss.textColorGrey]}>
                      {notification.hours}
                    </Text>
                    {notification.isSeen === false ? (
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: '#58bd7d',
                          alignSelf: 'center',
                          marginLeft: 100,
                          borderRadius: 30,
                        }}
                      />
                    ) : null}
                  </View>
                  <Text
                    style={[
                      globalCss.textColorGrey,
                      {width: '70%', lineHeight: 20, letterSpacing: 0.4},
                    ]}>
                    {notification.notificationLong}
                  </Text>
                </View>
              </View>
            </View>
          ) : null,
        ),
      )}
    </View>
  );
}
