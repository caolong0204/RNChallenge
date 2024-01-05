import * as React from 'react';
import {Button, Dimensions, StyleSheet, View} from 'react-native';
import Svg, {Rect, Text} from 'react-native-svg';
import {goBack, navigate} from '../../../Navigators/navigationService';
import {APP_SCREEN} from '../../../Navigators/screenTypes';

const TimeLine = () => {
  const screenWidth = Dimensions.get('window').width;

  const renderBars = () => {
    const totalBars = 48;
    const barWidth = Math.floor((screenWidth - totalBars) / totalBars);
    const barHeight = 50;
    const bars = [];
    const space = screenWidth - barWidth * 48 - 48;
    for (let i = 0; i < totalBars; i++) {
      const x = space / 2 + i * (barWidth + 1);
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
          <Text
            key={i + 'txt'}
            fill="#000"
            fontSize="11"
            x={positionX}
            y={barHeight + 10}>
            {value}
          </Text>,
        );
      }
    }

    return bars;
  };
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <Button
        title="Back"
        onPress={() => {
          goBack();
        }}
      />
      <Text>C</Text>
      <Svg height={100} width={screenWidth}>
        {renderBars()}
      </Svg>
      <Button
        title="go to D"
        onPress={() => {
          // pushScreen(APP_SCREEN.CHALLENGE2, {screen: APP_SCREEN.TIME_LINE});
          navigate(APP_SCREEN.CHALLENGE1, {
            screen: APP_SCREEN.REACT_TO_MESSAGE,
          });

          // navigate(APP_SCREEN.MOMO_SCREEN);
        }}
      />
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
