import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ButtonDetails = ({navigation, route}) => {
  const {color, icon, title} = route.params;

  return (
    <View style={styles.wrapper}>
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

      <Button
        title="Press Me"
        color="red"
        onPress={() => {
          Alert.alert('You pressed on the button');
        }}></Button>
      <Button
        title="Disable Button"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            color="purple"
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            color="green"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>
    </View>
  );
};
export default ButtonDetails;
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 700,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
