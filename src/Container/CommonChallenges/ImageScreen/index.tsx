import * as React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import CameraCustom from './CameraCustom';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ImageScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const handleOpenCamera = () => {
    setShowCamera(true);
  };
  const handleShowImage = (path: string) => {
    setImagePath(path);
    setShowCamera(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenCamera} style={styles.buttonCamera}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      {imagePath !== '' && (
        <Image
          source={{uri: imagePath}}
          style={styles.messageAvatar}
          resizeMode="contain"
        />
      )}

      {showCamera && (
        <CameraCustom
          onCapture={handleShowImage}
          onBack={() => {
            setShowCamera(false);
          }}
        />
      )}
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  messageAvatar: {
    width: 300,
    height: 300,
    borderRadius: 24,
    marginTop: 50,
    alignSelf: 'center',
    borderWidth: 1,
  },
  buttonCamera: {
    marginTop: 100,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
