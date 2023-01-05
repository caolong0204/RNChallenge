import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PodCastScreenProps {}

const PodCastScreen = (props: PodCastScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>PodCastScreen</Text>
    </View>
  );
};

export default PodCastScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});
