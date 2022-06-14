import { View, Text } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
    </View>
  )
}

export default Icon