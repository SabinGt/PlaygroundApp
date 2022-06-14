import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../Components/Main';
import Text from '../Components/Text';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import Flatlist from '../Components/Flatlist';
import Icon from '../Components/Icon';
import Modal from '../Components/Modal';
import Textarea from '../Components/Textarea';
import Toast from '../Components/Toast';
import Avatar from '../Components/Avatar';
import Alert from '../Components/Alert';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Text" component={Text} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="Checkbox" component={Checkbox} />
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="Icon" component={Icon} />
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="Textarea" component={Textarea} />
        <Stack.Screen name="Toast" component={Toast} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Alert" component={Alert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
