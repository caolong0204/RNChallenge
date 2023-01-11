import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform, View} from 'react-native';

interface Props {
  children?: any;
  backgroundColor?: string;
}
export default function Screen(props: Props) {
  const {children, backgroundColor} = props;

  return (
    <View
      style={[
        styles.background,
        backgroundColor
          ? {
              backgroundColor: backgroundColor,
            }
          : {},
      ]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    width: '100%',
  },
});
