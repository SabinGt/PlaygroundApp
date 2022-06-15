import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHomeUser} from '@fortawesome/free-solid-svg-icons';
import {faCar} from '@fortawesome/free-solid-svg-icons';
const Icon = ({navigation, route}) => {
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 600,
        }}>
        <FontAwesomeIcon icon={faHomeUser} size={50} color="red" />
        <FontAwesomeIcon icon={icon} size={50} color="purple" />
        <FontAwesomeIcon icon={faCar} size={50} color="green" />
      </View>
    </View>
  );
};

export default Icon;
