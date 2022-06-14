import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Card from './common/Card';
import {leftCardData} from '../Assets/Constant/cardData';
import {rightCardData} from '../Assets/Constant/cardData';

const Main = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View>
            {leftCardData.map(obj => (
              <Card
                backgroundColor={obj.background}
                height={obj.height}
                width={obj.width}
                title={obj.title}
                icon={obj.icon}
                onPress={() => {
                  navigation.navigate(obj.title);
                  console.log(obj.icon, "sdfsdf")
                }}
              />
            ))}
          </View>
          <View>
            {rightCardData.map(obj => (
              <Card
                backgroundColor={obj.background}
                height={obj.height}
                width={obj.width}
                title={obj.title}
                icon={obj.icon}
                onPress={() => {
                  navigation.navigate(obj.title);
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
