import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const TextCard = ({navigation, route}) => {
  const {color, icon, title} = route.params;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
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
          justifyContent: 'space-around',
          alignItems:'center',
          height: 700,
        }}>
        <Text
          style={{
            fontFamily: 'Cochin',
            fontWeight: 'bold',
            color:'black'
          }}>
          This is bold text
        </Text>
        <Text style={styles.baseText}>
          I am bold
          <Text style={styles.innerText}> and Green</Text>
        </Text>
        <Text style={{
          fontSize:50
        }}>
          I am bigger text
        </Text>
      </View>
    </View>
  );
};

export default TextCard;
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'green',
  },
});
