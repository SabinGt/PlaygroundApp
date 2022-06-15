import {View, Text, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import facebook from '../Assets/Constant/images/Facebook.png';

const ImageDetails = ({navigation, route}) => {
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
      <View>
        <Image
          source={facebook}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dhkkb9wrz/image/upload/v1655033260/njmdibsdjqfp4el7tly0.jpg',
          }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
    </View>
  );
};

export default ImageDetails;
