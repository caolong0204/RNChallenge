import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {message: 'Xin Chao', fromCustomer: false},
  {message: 'Chao Ban', fromCustomer: true},
  {message: 'welcome to my app', fromCustomer: false},
  {message: 'Many tks', fromCustomer: true},
  {
    message: '1 tin nhan dai ngoang ngoang ne, chuan bi di nha',
    fromCustomer: true,
  },
  {
    message:
      'tin nhan cua ban van con ngan chan nha dung co tuong bo hahahahahahahahahaah',
    fromCustomer: true,
  },
];

const ChatScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flexGrow: 1}} contentContainerStyle={{}}>
        {data.map((item, index) => {
          return renderMessage(item, index);
        })}
      </ScrollView>
    </View>
  );
};

const renderMessage = (data: any, key: any) => {
  const isCustomer = data.fromCustomer;

  const isMsgCustomer = (type: string) => {
    if (isCustomer && type === 'messageContainer') {
      return {
        alignSelf: 'flex-end',
        backgroundColor: '#FFCC99',
        borderTopLeftRadius: 0,
      };
    } else if (isCustomer && type === 'message') {
      return {
        color: '#000',
      };
    } else if (isCustomer && type === 'time') {
      return {
        color: 'darkgray',
      };
    } else {
      return {
        borderTopRightRadius: 0,
      };
    }
  };

  return (
    <View style={styles.container}>
      <View
        key={key}
        style={[styles.messageContainer, isMsgCustomer('messageContainer')]}>
        <View style={[styles.messageView, isMsgCustomer('message')]}>
          <Text style={{padding: 10}}>{data.message}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginVertical: 5,
  },
  messageContainer: {
    borderRadius: 10,
    maxWidth: '80%',
    marginHorizontal: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#66FFFF',
  },
  messageView: {
    backgroundColor: 'transparent',
    maxWidth: '90%',
  },
});

export default ChatScreen;
