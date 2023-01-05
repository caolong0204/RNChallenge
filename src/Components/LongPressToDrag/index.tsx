import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const LongPressToDrag = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: withSpring(isPressed.value ? 1.2 : 1)},
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });
  const start = useSharedValue({x: 0, y: 0});
  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (isPressed.value) {
        offset.value = {
          x: e.translationX + start.value.x,
          y: e.translationY + start.value.y,
        };
      }
    })
    .onEnd(() => {
      if (isPressed.value) {
        start.value = {
          x: offset.value.x,
          y: offset.value.y,
        };
      }
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
  const longGesture = Gesture.LongPress().onStart(() => {
    isPressed.value = true;
  });
  const compose = Gesture.Simultaneous(panGesture, longGesture);
  return (
    <GestureDetector gesture={compose}>
      <Animated.View style={[styles.ball, animatedStyles]}>
        <Text style={{textAlign: 'center', color: 'red'}}>
          Long Press and Drag
        </Text>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default LongPressToDrag;
