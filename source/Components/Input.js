import { View, Text,TextInput,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const InputDetails = ({navigation, route}) => {
  const [text, onChangeText] =useState("Default Text");
  const [number, onChangeNumber] = useState(null);
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
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        numberOfLines={5}
        autoCapitalize='characters'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Numberic Input Text"
        keyboardType="numeric"
      />
      </View>
    </View>
  )
}

export default InputDetails;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});