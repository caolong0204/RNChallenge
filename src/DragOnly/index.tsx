import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const DragOnly = () => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: withSpring(isPressed.value ? 1.2 : 1)},
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
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.ball, animatedStyles]}>
        <Text style={{textAlign: 'center', color: 'red'}}>Drag Only</Text>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#7CFC00',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default DragOnly;
