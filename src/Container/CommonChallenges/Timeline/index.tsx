import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Svg, {Rect, Text} from 'react-native-svg';

const TimeLine = () => {
  const screenWidth = Dimensions.get('window').width;

  const renderBars = () => {
    const totalBars = 48;
    const barWidth = Math.floor((screenWidth - totalBars) / totalBars);
    const barHeight = 50;
    const bars = [];

    for (let i = 0; i < totalBars; i++) {
      console.log('=====i', i);
      const x = i * (barWidth + 1);
      bars.push(
        <Rect
          key={i}
          x={x}
          y={0}
          width={barWidth}
          height={barHeight}
          fill="black"
        />,
      );
      if (i % 4 === 0 || i === 47) {
        const value = i === 47 ? 0 : i / 2;
        const positionX = getOffSetAndValue(i, barWidth, x);
        bars.push(
          <Text fill="#000" fontSize="11" x={positionX} y={60}>
            {value}
          </Text>,
        );
      }
    }

    return bars;
  };

  return (
    <View style={[StyleSheet.absoluteFill]}>
      <Svg height={100} width={screenWidth}>
        {renderBars()}
      </Svg>
    </View>
  );
};
const getOffSetAndValue = (
  index: number,
  widthItem: number,
  position: number,
) => {
  let leftOffset = -widthItem / 2 - 1;
  if (index === 0) {
    leftOffset = 0;
  }
  if (index >= 20) {
    leftOffset = -widthItem - 1;
  }
  if (index >= 40) {
    leftOffset = -widthItem - 1.5;
  }
  if (index === 47) {
    leftOffset = 0.5;
  }
  return position + leftOffset;
};
export default TimeLine;
