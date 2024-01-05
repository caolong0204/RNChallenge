import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {navigate} from '../../../Navigators/navigationService';
import {APP_SCREEN} from '../../../Navigators/screenTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  content: {color: 'blue', fontWeight: 'bold'},
});

const LIST_FEATURE = [
  {id: APP_SCREEN.MOMO_SCREEN, title: 'MoMo Screen'},
  {id: APP_SCREEN.TIME_LINE, title: 'TimeLine'},
  {id: APP_SCREEN.CAR_TIME, title: 'CarTime'},
  {id: APP_SCREEN.NEW_CHALLENGE, title: 'New Challenge'},
];
const General2Screen = () => {
  const handlePress = (screenName: any) => {
    navigate(screenName);
  };
  return (
    <View style={styles.container}>
      {LIST_FEATURE.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              handlePress(item.id);
            }}
            key={item.id}>
            <Text style={styles.content}>
              {index + 1}. {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default General2Screen;
