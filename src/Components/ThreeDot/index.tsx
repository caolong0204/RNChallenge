import * as React from 'react';
import {View, StyleSheet, ColorValue} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface ThreeDot {
  dotColor?: ColorValue;
  size?: number;
}
const ThreeDots = ({dotColor = 'black', size = 7}: ThreeDot) => {
  const valueAnimated = useSharedValue(0);
  React.useEffect(() => {
    valueAnimated.value = withRepeat(withTiming(10, {duration: 300}), -1, true);
  });
  const styleAnimatedFirst = useAnimatedStyle(() => {
    const translateY = interpolate(valueAnimated.value, [0, 10], [1.6, 1]);
    return {transform: [{scale: translateY}]};
  }, []);
  const styleAnimatedSecond = useAnimatedStyle(() => {
    const translateY = interpolate(valueAnimated.value, [0, 10], [1, 1.6]);
    return {transform: [{scale: translateY}]};
  }, []);
  const styleAnimatedThird = useAnimatedStyle(() => {
    const translateY = interpolate(valueAnimated.value, [0, 5], [1.6, 1]);
    return {transform: [{scale: translateY}]};
  }, []);
  const styleDot = {
    backgroundColor: dotColor,
    width: size,
    height: size,
    borderRadius: size / 2,
  };
  return (
    <View style={styles.iconView}>
      <Animated.View style={[styles.dotView, styleDot, styleAnimatedFirst]} />
      <Animated.View style={[styles.dotView, styleDot, styleAnimatedSecond]} />
      <Animated.View style={[styles.dotView, styleDot, styleAnimatedThird]} />
    </View>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({
  dotView: {
    backgroundColor: 'black',
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: 5,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
