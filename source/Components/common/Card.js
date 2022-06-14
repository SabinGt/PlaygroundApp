import {View, Text, Image} from 'react-native';
import React from 'react';

const Card = ({height, width, title, icon, backgroundColor}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        borderRadius: 10,
        marginVertical: 8,
      }}>
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
      <Image source={icon}></Image>
    </View>
  );
};

export default Card;
