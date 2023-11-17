import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface NewChallengeProps {}

const NewChallenge = (props: NewChallengeProps) => {
  return (
    <View style={styles.container}>
      <Text>NewChallenge</Text>
    </View>
  );
};

export default NewChallenge;

const styles = StyleSheet.create({
  container: {},
});
