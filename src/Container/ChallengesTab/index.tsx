import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ChallengesTabProps {}

const ChallengesTab = (props: ChallengesTabProps) => {
  return (
    <View style={styles.container}>
      <Text>ChallengesTab</Text>
    </View>
  );
};

export default ChallengesTab;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});
