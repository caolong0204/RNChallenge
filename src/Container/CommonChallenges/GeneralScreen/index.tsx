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
  {id: APP_SCREEN.PROGRESS_BAR, title: 'Progress Bar'},
  {id: APP_SCREEN.REACT_TO_MESSAGE, title: 'React Message'},
  {id: APP_SCREEN.LOADING_SCREEN, title: 'Loading Screen'},
  {id: APP_SCREEN.MOMO_SCREEN, title: 'MOMO Header'},
  {id: APP_SCREEN.VIEW_3D, title: 'View 3D'},
];
const GeneralScreen = () => {
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
export default GeneralScreen;
