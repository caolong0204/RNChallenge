import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {ImageAssets} from '../../Assets/ImageAssets';
import {SCREEN_WIDTH} from '../../Common/constant';

const ReactToMessage = () => {
  const [heartCount, setHeartCount] = useState(0);
  const [hearts, setHearts] = useState<{id: string}[]>([]);
  const heartTimeout = useRef<ReturnType<typeof setTimeout>>();
  const countAnimatedValue = useRef(new Animated.Value(0)).current;

  const handleCompleteAnimation = useCallback((id: string) => {
    setHearts(oldHearts => {
      return oldHearts.filter(heart => heart.id !== id);
    });
  }, []);
  const handlePressCount = () => {
    if (heartTimeout.current) {
      clearTimeout(heartTimeout.current);
    }
    setHeartCount(preValue => preValue + 1);

    heartTimeout.current = setTimeout(() => {
      Animated.spring(countAnimatedValue, {
        toValue: 0,
        speed: 48,
        useNativeDriver: true,
      }).start();
    }, 500);

    Animated.spring(countAnimatedValue, {
      toValue: -50,
      speed: 48,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messageContainer}>
        <Image style={styles.messageAvatar} source={ImageAssets.userAvatar} />
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>
            Like and subscribe to Minh Techie channel
          </Text>
        </View>

        <TouchableOpacity
          style={styles.loveButton}
          activeOpacity={1}
          onPress={handlePressCount}>
          <View style={styles.loveCircle}>
            {heartCount ? (
              <Image style={styles.loveIcon} source={ImageAssets.heart} />
            ) : (
              <Image
                style={styles.loveIcon}
                source={ImageAssets.heartOutLine}
              />
            )}
          </View>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.loveCountCircle,
            {
              transform: [
                {translateY: countAnimatedValue},
                {
                  scale: countAnimatedValue.interpolate({
                    inputRange: [-50, 0],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}>
          <Text style={styles.loveCountText}>{heartCount}</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
  },
  messageAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  messageContent: {
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: '#178BF4',
    borderRadius: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 20,
    color: 'white',
  },
  messageSentTime: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  loveButton: {
    position: 'absolute',
    bottom: -16,
    right: -16,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loveCircle: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'white',
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: 'grey',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: {
          width: 0.5,
          height: 0.5,
        },
      },
    }),
  },
  loveIcon: {
    width: 12,
    height: 12,
  },
  loveCountCircle: {
    position: 'absolute',
    bottom: -10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    right: -8,
    borderRadius: 16,
    backgroundColor: 'orange',
    zIndex: 100,
  },
  loveCountText: {
    color: 'white',
  },
});

export default ReactToMessage;
