import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const DATA = [
  {
    id: '1',
    title: 'Bread',
  },
  {
    id: '2',
    title: 'Beer',
  },
  {
    id: '3',
    title: 'Diaper',
  },
  {
    id: '4',
    title: 'Milk',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatlistDetails = ({navigation, route}) => {
  const {color, icon, title} = route.params;
  const renderItem = ({item}) => <Item title={item.title} />;
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
            color: 'white',
          }}>
          {title}
        </Text>
        <FontAwesomeIcon icon={icon} size={30}></FontAwesomeIcon>
      </View>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default FlatlistDetails;
const styles = StyleSheet.create({
  container: {
    height: 600,
  },
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});
