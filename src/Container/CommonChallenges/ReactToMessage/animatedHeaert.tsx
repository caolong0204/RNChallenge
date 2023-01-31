import * as React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ImageAssets} from '../../../Assets/ImageAssets';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../Common/constant';

type AnimatedHeartProps = {
  onCompleteAnimation: (id: string) => void;
  id: string;
};
const AnimatedHeart = ({id, onCompleteAnimation}: AnimatedHeartProps) => {
  const animatedValueY = useSharedValue(0);
  const getRandomSignedNumber = () => (Math.random() < 0.5 ? -1 : 1);
  const getRandomXOutput = () => {
    const random = Math.random();
    return getRandomSignedNumber() < 0
      ? -random * SCREEN_WIDTH * 0.7
      : random * 10;
  };
  const getRandomRotateOutput = () => {
    return [getRandomSignedNumber() < 0 ? -60 : 60, 0];
  };
  const randomRotate = React.useRef(getRandomRotateOutput()).current;

  React.useEffect(() => {
    animatedValueY.value = withTiming(-SCREEN_HEIGHT, {duration: 3000}, () => {
      runOnJS(onCompleteAnimation)(id);
    });
  }, [animatedValueY, id, onCompleteAnimation]);
  const randomX = React.useRef(getRandomXOutput()).current;
  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(animatedValueY.value, [-50, 0], [1, 0.5], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.IDENTITY,
    });
    const translateX = interpolate(
      animatedValueY.value,
      [-SCREEN_HEIGHT, 0],
      [randomX, 0],
    );
    const translateY = interpolate(
      animatedValueY.value,
      [-SCREEN_HEIGHT, -10, 0],
      [-SCREEN_HEIGHT, -50, 0],
    );

    const rotate = interpolate(
      animatedValueY.value,
      [-SCREEN_HEIGHT, 0],
      randomRotate,
    );
    const opacity = interpolate(
      animatedValueY.value,
      [-SCREEN_HEIGHT / 2, 0],
      [0, 1],
    );
    return {
      transform: [
        {
          scale: scale,
        },
        {translateY: translateY},
        {translateX: translateX},
        {
          rotate: rotate + 'deg',
        },
      ],
      opacity: opacity,
    };
  });
  return (
    <Animated.Image
      source={ImageAssets.heart}
      style={[styles.heartIcon, animatedStyles]}
    />
  );
};

export default AnimatedHeart;

const styles = StyleSheet.create({
  heartIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
  },
});
