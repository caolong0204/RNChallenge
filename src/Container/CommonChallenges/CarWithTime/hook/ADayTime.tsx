import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TimeBarProps} from './useTimeline';

interface ADayTimeProps {
  data: TimeBarProps[];
  layoutWidth: number;
  noLimitTmpGrantFlg?: boolean;
}

const ADayTime = (props: ADayTimeProps) => {
  const {data, layoutWidth} = props;
  const itemWidth = layoutWidth / 48 - 1;
  return (
    <View style={{flexDirection: 'column', height: 70}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 50,
          width: layoutWidth,
        }}>
        {data.map((item, index) => {
          const value = index === 47 ? 0 : index / 2;
          const leftOffset = getOffSetAndValue(index, itemWidth);
          return (
            <View key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: item.color,
                  width: itemWidth,
                  height: 50,
                }}
              />
              {(index % 4 === 0 || index === 47) && (
                <View
                  style={[
                    styles.numberView,
                    {left: leftOffset, zIndex: index, width: itemWidth * 3.5},
                  ]}>
                  <Text style={{fontSize: 13}}>{value}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default React.memo(ADayTime);

const getOffSetAndValue = (index: number, widthItem: number) => {
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
  return leftOffset;
};

const styles = StyleSheet.create({
  numberView: {
    position: 'absolute',
    top: 50,
  },
});
