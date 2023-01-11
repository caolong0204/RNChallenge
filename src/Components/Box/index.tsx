import React from 'react';
import {Button, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      //   transform: [{translateX: offset.value}],
      width: offset.value,
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => {
          offset.value = withSpring(offset.value + 30, {
            damping: 1,
            mass: 1,
            stiffness: 100,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
          });
        }}
        title="Move"
      />
    </>
  );
}
export default Box;
const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
