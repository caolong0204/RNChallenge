/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Ref, useImperativeHandle} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
  minColor?: string;
  maxColor?: string;
  width?: number | string;
  height?: number;
  skipTime?: number;
}
export interface ProgressBarRef {
  handleUpProgressBar: () => void;
  handleDownProgressBar: () => void;
}
const ProgressBar = (
  {
    currentValue = 0,
    maxValue = 1,
    minColor = '#7451F2',
    maxColor = '#EEE7FD',
    width,
    height = 3.5,
    skipTime = 10,
  }: ProgressBarProps,
  ref: Ref<ProgressBarRef>,
) => {
  const processValue = useSharedValue(currentValue);
  const animatedStyles = useAnimatedStyle(() => {
    const progress =
      typeof width === 'number'
        ? (processValue.value / maxValue) * width
        : `${(processValue.value / maxValue) * 100}%`;
    return {
      width: progress,
    };
  });
  const changeLongBar = (value: number) => {
    return withSpring(value, {overshootClamping: true});
  };
  const handleUpProgressBar = () => {
    if (processValue.value >= maxValue - skipTime) {
      processValue.value = changeLongBar(maxValue);
      return;
    }
    processValue.value = changeLongBar(processValue.value + skipTime);
  };

  const handleDownProgressBar = () => {
    if (processValue.value <= skipTime) {
      processValue.value = changeLongBar(0);
      return;
    }
    processValue.value = changeLongBar(processValue.value - skipTime);
  };

  useImperativeHandle(ref, () => ({
    handleUpProgressBar: handleUpProgressBar,
    handleDownProgressBar: handleDownProgressBar,
  }));

  const styleMaxValue = React.useMemo(() => {
    return {backgroundColor: maxColor, height, width};
  }, []);

  const styleProcessValue = React.useMemo(() => {
    return {
      backgroundColor: minColor,
      height,
    };
  }, []);

  return (
    <View style={[styles.container, styleMaxValue]}>
      <Animated.View
        style={[styles.progress, styleProcessValue, animatedStyles]}
      />
    </View>
  );
};

export default React.forwardRef(ProgressBar);

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
  },
  progress: {
    borderRadius: 2,
  },
});
