import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const dummyVideoUrl2 =
  'https://api.dev.babiuni.com/api/files/6de22523-dcdf-439e-be3b-6dfdf3963a4b';

const ModalVideo = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Video
        style={{
          ...styles.video,
          transform: [{rotate: '90deg'}],
          flex: 1,
          left: -screenWidth / 2 + 30,
          width: screenHeight,
          backgroundColor: 'teal',
        }}
        source={{uri: dummyVideoUrl2}} //dummyVideoUrl3
        resizeMode={'contain'}
        repeat={true}
        onError={e => {
          console.log('video error' + e);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
  },
  video: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default ModalVideo;
