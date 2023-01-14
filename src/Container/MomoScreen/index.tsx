import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {SCREEN_HEIGHT} from '../../Common/constant';

import IonIcon from 'react-native-vector-icons/Ionicons';
import AweaSomeIcon from 'react-native-vector-icons/FontAwesome5';
import {ImageAssets} from '../../Assets/ImageAssets';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
const MomoScreen = () => {
  const animatedValue = useSharedValue(0);
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const scrollRef = React.useRef<ScrollView>(null);
  const scrollDirection = React.useRef('');
  const lastOffsetY = React.useRef(0);
  const searchInputAnimation = useAnimatedStyle(() => {
    const scaleX = interpolate(animatedValue.value, [0, 50], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const translateX = interpolate(animatedValue.value, [0, 40], [0, -250], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const opacity = interpolate(animatedValue.value, [0, 40], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{scaleX: scaleX}, {translateX: translateX}],
      opacity: opacity,
    };
  });
  const featureNameAnimation = useAnimatedStyle(() => {
    const scaleX = interpolate(animatedValue.value, [0, 40], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

    const opacity = interpolate(animatedValue.value, [0, 25], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{scaleX: scaleX}],
      opacity: opacity,
    };
  });
  const pinterestAnimation = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 40], [0, 30], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const translateY = interpolate(animatedValue.value, [0, 80], [0, -60], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{translateY: translateY}, {translateX: translateX}],
    };
  });

  const googleAnimation = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 40], [0, -30], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const translateY = interpolate(animatedValue.value, [0, 80], [0, -60], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{translateY: translateY}, {translateX: translateX}],
    };
  });
  const visaAnimation = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 40], [0, -75], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const translateY = interpolate(animatedValue.value, [0, 80], [0, -60], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{translateY: translateY}, {translateX: translateX}],
    };
  });
  const linkedInAnimation = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 40], [0, -120], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const translateY = interpolate(animatedValue.value, [0, 80], [0, -60], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{translateY: translateY}, {translateX: translateX}],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <IonIcon
              name="search"
              size={24}
              color="#fff"
              style={styles.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor="rgba(255,255,255,0.8)"
              style={[styles.searchInput, searchInputAnimation]}
            />
          </View>
          <AweaSomeIcon
            name="bell"
            size={24}
            color="#fff"
            style={styles.bellIcon}
          />
          <Image source={ImageAssets.userAvatar} style={styles.avatar} />
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, pinterestAnimation]}>
            <AweaSomeIcon
              name="pinterest-square"
              size={32}
              color="#fff"
              style={styles.iconFeature}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Pinterest
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, googleAnimation]}>
            <AweaSomeIcon
              name="google-plus-square"
              size={32}
              color="#fff"
              style={styles.iconFeature}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Google
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, visaAnimation]}>
            <AweaSomeIcon
              name="cc-visa"
              size={32}
              color="#fff"
              style={styles.iconFeature}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Visa
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, linkedInAnimation]}>
            <AweaSomeIcon
              name="linkedin"
              size={32}
              color="#fff"
              style={styles.iconFeature}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              linkedIn
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>
      <ScrollView
        ref={scrollRef}
        onScroll={e => {
          const offSetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offSetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offSetY;
          animatedValue.value = offSetY;
        }}
        onScrollEndDrag={() => {
          scrollRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
          });
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent} />
      </ScrollView>
    </View>
  );
};

export default MomoScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#AF0C6E',
  },
  paddingForHeader: {
    height: 96,
  },
  scrollViewContent: {
    height: SCREEN_HEIGHT * 2,
    backgroundColor: '#fff',
  },
  upperHeaderPlaceholder: {
    height: 40,
  },
  upperHeader: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  lowerHeader: {
    height: 96,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  avatar: {width: 30, height: 30, borderRadius: 115},
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    color: '#fff',
    borderRadius: 4,
    paddingVertical: 10,
    paddingLeft: 36,
  },
  bellIcon: {marginHorizontal: 18},
  searchIcon: {marginLeft: 8},
  searchContainer: {flex: 1, justifyContent: 'center'},
  feature: {alignItems: 'center'},
  featureName: {color: '#fff', fontWeight: '700', fontSize: 14},
  iconFeature: {marginVertical: 8},
});
