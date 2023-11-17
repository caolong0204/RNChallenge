export const AnimationAssets = {
  circleFading: require('./Animation/CircleFading.json'),
  circleFading2: require('./Animation/CircleFading2.json'),
  Loading: require('./Animation/Loading.json'),
};

export type AnimationType = keyof typeof AnimationAssets;
