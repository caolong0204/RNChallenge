import * as React from 'react';
import {View, StyleSheet, ColorValue} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface ThreeDot {
  dotColor?: ColorValue;
  size?: number;
}
const ThreeDots = ({dotColor = 'black', size = 7}: ThreeDot) => {
  const valueAnimatedFirst = useSharedValue(0);
  const valueAnimatedSecond = useSharedValue(0);
  const valueAnimatedThird = useSharedValue(0);
  React.useEffect(() => {
    valueAnimatedFirst.value = withRepeat(
      withTiming(10, {duration: 350}),
      -1,
      true,
    );
    valueAnimatedSecond.value = withDelay(
      150,
      withRepeat(withTiming(10, {duration: 350}), -1, true),
    );
    valueAnimatedThird.value = withDelay(
      300,
      withRepeat(withTiming(10, {duration: 350}), -1, true),
    );
  });
  const styleAnimatedFirst = useAnimatedStyle(() => {
    const translateY = interpolate(valueAnimatedFirst.value, [0, 10], [1, -6]);
    return {transform: [{translateY: translateY}]};
  }, []);
  const styleAnimatedSecond = useAnimatedStyle(() => {
    const translateY = interpolate(valueAnimatedSecond.value, [0, 10], [1, -6]);
    return {transform: [{translateY: translateY}]};
  }, []);
  const styleAnimatedThird = useAnimatedStyle(() => {
    const translateY = interpolate(valueAnimatedThird.value, [0, 10], [1, -6]);
    return {transform: [{translateY: translateY}]};
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
