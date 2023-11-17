import LottieView from 'lottie-react-native';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AnimationAssets} from '../../../Assets/AnimationAssets';

interface NewChallengeProps {}

const NewChallenge = (props: NewChallengeProps) => {
  return (
    <View style={styles.container}>
      <Text>NewChallenge2</Text>
      <LottieView
        source={AnimationAssets.circleFading}
        autoPlay
        loop={false}
        style={{width: 100, height: 100}}
      />
      <LottieView
        source={AnimationAssets.circleFading2}
        style={{width: 100, height: 100}}
        autoPlay
      />
      <LottieView
        source={AnimationAssets.Loading}
        autoPlay
        loop
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default NewChallenge;

const styles = StyleSheet.create({
  container: {},
});
