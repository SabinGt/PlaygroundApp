import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Textarea = ({navigation, route}) => {
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
        <TextInput
          placeholder="Text Area"
          placeholderTextColor="grey"
          style={styles.textInput}
          secureTextEntry={true}
          multiline
          numberOfLines={4}
        />
      </View>
    </View>
  );
};

export default Textarea;
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: Dimensions.get('window').width - 40,
    borderRadius: 4,
    margin: 20,
    fontSize: 18,
    color: 'black',
  },
});
