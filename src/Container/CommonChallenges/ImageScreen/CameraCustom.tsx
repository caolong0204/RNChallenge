import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {convertPathForPlatform} from './utils';

type CameraCustomProps = {
  onCapture: (path: string) => void;
  onBack: () => void;
};
const CameraCustom = (props: CameraCustomProps) => {
  const {onCapture, onBack} = props;
  const {hasPermission, requestPermission} = useCameraPermission();
  const cameraRef = useRef<Camera>(null);
  const [isInitCamera, setIsInitCamera] = useState(false);
  useEffect(() => {
    !hasPermission && requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPermission]);

  const device = useCameraDevice('back');

  const handleCapture = async () => {
    const photo = await cameraRef.current?.takePhoto();
    const result = convertPathForPlatform(photo?.path || '');

    onCapture(result || '');
  };

  if (device == null) {
    return (
      <View>
        <Text>Camera error</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={cameraRef}
        onInitialized={() => {
          setIsInitCamera(true);
        }}
        photo={true}
        orientation="landscape-left"
      />
      {isInitCamera && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={{color: '#fff'}}>Back</Text>
        </TouchableOpacity>
      )}
      {isInitCamera && (
        <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
          <Text style={{color: '#fff'}}>Capture</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CameraCustom;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  backButton: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 15,
    marginLeft: 15,
  },
});
