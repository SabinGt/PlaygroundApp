import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Avatar = ({navigation, route}) => {
  const {color, icon, title} = route.params;

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          backgroundColor: color,
          height: 60,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
          }}>
          {title}
        </Text>
        <FontAwesomeIcon icon={icon} size={30}></FontAwesomeIcon>
      </View>
      <View
        style={{
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            height: 120,
            width: 120,
            borderRadius: 180 / 2,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 70,
              color: 'white',
            }}>
            SG
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            height: 120,
            width: 120,
            borderRadius: 180 / 2,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <FontAwesomeIcon icon={icon} size={70}></FontAwesomeIcon>
        </View>
      </View>
    </View>
  );
};

export default Avatar;
