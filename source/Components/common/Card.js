import {Text, Pressable,View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Card = ({height, width, title, icon, backgroundColor, onPress}) => {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        height: height,
        width: width, 
        borderRadius: 10,
        marginVertical: 8,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          paddingLeft: 15,
          paddingTop: 10,
          textTransform: 'uppercase',
          fontWeight: '400',
          letterSpacing: 1.5,
          borderBottomWidth: 1.5,
          borderBottomColor: 'white',
        }}>
        {title}
      </Text>
      <View style={{
          alignItems:'center',
          paddingTop:25
      }}>
        <FontAwesomeIcon icon={icon} size={60} />
      </View>
    </Pressable>
  );
};

export default Card;
