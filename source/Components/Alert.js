import {View, Text, Alert, Button} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const AlertDetails = ({navigation, route}) => {
  const {color, icon, title} = route.params;
  const showAlert = () =>
    Alert.alert(
      'Demo Alert',
      'Button with two buttons',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  const threeOptionAlert = () =>
    Alert.alert(
      'Three options',
      ' This is three option alert',
      [
        {
          text: 'May be',
          onPress: () => {
            console.log('Maybe Pressed');
          },
        },
        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
        {text: 'No', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );
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
      <View style={{
        height:600,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
      }}>
        <Button title="This is alert" onPress={showAlert} />
        <Button title="Three option alert" onPress={threeOptionAlert} />
      </View>
    </View>
  );
};

export default AlertDetails;
