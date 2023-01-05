import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
const VibrateView = () => {
  const sharedValue = useSharedValue(1);
  //set negative value to repeat forever until cancel animated.
  sharedValue.value = withRepeat(withTiming(1.2), -1, true);

  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: sharedValue.value},
      ],
      opacity: isPressed.value ? 0.5 : 1,
    };
  });
  const start = useSharedValue({x: 0, y: 0});
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      // start.value = {
      //   x: offset.value.x,
      //   y: offset.value.y,
      // };
      offset.value = {
        x: 0,
        y: 0,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.ball, animatedStyles]}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Vibrate View </Text>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default VibrateView;
