import * as React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {ImageAssets} from '../../Assets/ImageAssets';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Common/constant';

type AnimatedHeartProps = {
  onCompleteAnimation: (id: string) => void;
  id: string;
};
const AnimatedHeart = ({id, onCompleteAnimation}: AnimatedHeartProps) => {
  const animatedValueY = React.useRef(new Animated.Value(0)).current;
  const getRandomSignedNumber = () => (Math.random() < 0.5 ? -1 : 1);
  const getRandomXOutput = () => {
    const random = Math.random();
    return getRandomSignedNumber() < 0
      ? -random * SCREEN_WIDTH * 0.7
      : random * 10;
  };
  const getRandomRotateOutput = () => {
    return [getRandomSignedNumber() < 0 ? '-60deg' : '60deg', '0deg'];
  };
  const randomX = React.useRef(getRandomXOutput()).current;
  const randomRotate = React.useRef(getRandomRotateOutput()).current;
  React.useEffect(() => {
    Animated.timing(animatedValueY, {
      toValue: -SCREEN_HEIGHT,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      onCompleteAnimation(id);
    });
  }, [animatedValueY, id, onCompleteAnimation]);
  return (
    <Animated.Image
      source={ImageAssets.heart}
      style={[
        styles.heartIcon,
        {
          transform: [
            {
              translateX: animatedValueY.interpolate({
                inputRange: [-SCREEN_HEIGHT, 0],
                outputRange: [randomX, 0],
              }),
            },
            {
              translateY: animatedValueY.interpolate({
                inputRange: [-SCREEN_HEIGHT, -10, 0],
                outputRange: [-SCREEN_HEIGHT, -50, 0],
              }),
            },
            {
              scale: animatedValueY.interpolate({
                inputRange: [-50, 0],
                outputRange: [1, 0.5],
                extrapolate: 'clamp',
              }),
            },
            {
              rotate: animatedValueY.interpolate({
                inputRange: [-SCREEN_HEIGHT, 0],
                outputRange: randomRotate,
                extrapolate: 'clamp',
              }),
            },
          ],
          opacity: animatedValueY.interpolate({
            inputRange: [-SCREEN_HEIGHT / 2, 0],
            outputRange: [0, 1],
          }),
        },
      ]}
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
