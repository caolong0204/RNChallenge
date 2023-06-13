import * as React from 'react';
import {forwardRef, useCallback, ForwardedRef} from 'react';
import {FlashList} from '@shopify/flash-list';
import {
  ActivityIndicator,
  Dimensions,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {
  TimeBarProps,
  UnavailableTime,
  handleMakeDataTimeline,
} from './hook/useTimeline';
import ADayTime from './hook/ADayTime';
export type TimeDataType = {
  start_period_date: string; // YYYY/MM/DD
  end_period_date: string; // YYYY/MM/DD
  user_start_time: string; // YYYY/MM/DD HH:mm
  user_end_time: string; // YYYY/MM/DD HH:mm
  start_business_time: string; // HH:mm
  end_business_time: string; // HH:mm
  list_unavailable_time: UnavailableTime[]; // YYYY/MM/DD HH:mm
};
interface TimelineProps {
  timeData: TimeDataType;
  onChangeDay?: (newIndex: number) => void;
  initIndex: number;
  noLimitTmpGrantFlg?: boolean;
}

export interface TimelineRef {
  scrollToIndex: (toIndex: number) => void;
}
const FullTimeline = (
  {timeData, onChangeDay, initIndex, noLimitTmpGrantFlg}: TimelineProps,
  ref: ForwardedRef<TimelineRef>,
) => {
  const {width} = Dimensions.get('screen');
  const [layoutWidth, setLayoutWidth] = React.useState(width);
  const refList = React.useRef(null);
  const currentIndex = React.useRef<number>(0);
  const isDrag = React.useRef(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const listDataTime: TimeBarProps[][] = React.useMemo(() => {
    return timeData
      ? handleMakeDataTimeline(
          timeData.user_start_time,
          timeData.user_end_time,
          timeData.start_business_time,
          timeData.end_business_time,
          timeData.list_unavailable_time,
          timeData.start_period_date,
          timeData.end_period_date,
        )
      : [];
  }, [timeData]);

  const handleOnLayout = useCallback(
    (event: LayoutChangeEvent) => {
      layoutWidth === width && setLayoutWidth(event.nativeEvent.layout.width);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [layoutWidth],
  );

  const renderItem = useCallback(
    ({item}) => (
      <ADayTime
        data={item}
        layoutWidth={layoutWidth}
        noLimitTmpGrantFlg={noLimitTmpGrantFlg}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [layoutWidth],
  );

  const handlScrollToIndex = (toIndex: number) => {
    refList.current?.scrollToIndex({
      index: toIndex,
      animated: true,
    });
  };

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: handlScrollToIndex,
  }));

  const onDrag = () => {
    isDrag.current = true;
  };

  const onChangePage = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!isDrag.current) {
        return;
      }
      const newIndex = Math.round(
        event.nativeEvent.contentOffset.x / layoutWidth,
      );
      if (newIndex !== currentIndex.current) {
        onChangeDay?.(newIndex);
        currentIndex.current = newIndex;
      }
      isDrag.current = false;
    },
    [layoutWidth, onChangeDay],
  );

  /**
   * function support scrollToIndex more accurate
   */
  const overideLayout = useCallback(
    layout => {
      layout.size = layoutWidth;
    },
    [layoutWidth],
  );
  const handleOnloadDone = useCallback(() => {
    setIsLoading(false);
  }, []);
  return (
    <View onLayout={handleOnLayout} style={styles.container}>
      {isLoading && (
        <View style={styles.loadingView}>
          <ActivityIndicator />
        </View>
      )}
      {layoutWidth !== width && (
        <FlashList
          ref={refList}
          data={listDataTime}
          renderItem={renderItem}
          estimatedItemSize={layoutWidth}
          onMomentumScrollEnd={onChangePage}
          initialScrollIndex={initIndex}
          // eslint-disable-next-line react/jsx-no-bind
          onScrollBeginDrag={onDrag}
          horizontal={true}
          pagingEnabled
          overrideItemLayout={overideLayout}
          estimatedFirstItemOffset={0}
          // estimatedListSize={{ width: data.length * layoutWidth, height: 70 }}
          keyExtractor={(_, index: number) => {
            return index.toString();
          }}
          onLoad={handleOnloadDone}
        />
      )}
    </View>
  );
};

export default forwardRef(FullTimeline);

const styles = StyleSheet.create({
  container: {paddingVertical: 10, flexDirection: 'column'},
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    backgroundColor: 'light',
    height: 85,
  },
});
