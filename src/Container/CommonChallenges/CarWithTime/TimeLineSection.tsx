import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FullTimeline, {TimeDataType, TimelineRef} from './FullTimeLine';
import dayjs from 'dayjs';
import {useState} from 'react';
import {getDatesInRange} from './hook/useTimeline';

interface TimelineSectionProps {
  timeData: TimeDataType;
  noLimitTmpGrantFlg?: boolean;
}

const TimelineSection = ({
  timeData,
  noLimitTmpGrantFlg,
}: TimelineSectionProps) => {
  const timelineRef = React.useRef<TimelineRef>(null);

  const listDay = getDatesInRange(
    timeData.start_period_date,
    timeData.end_period_date,
  );
  const startBookingDay = dayjs(timeData.user_start_time).format('YYYY/MM/DD');
  const initIndex = listDay.indexOf(startBookingDay);
  const countDay = listDay.length;
  const [currentIndex, setCurrentIndex] = useState<number>(initIndex);

  React.useEffect(() => {
    // when choose other day through date picker, set it to currentIndex to update showDay
    setCurrentIndex(initIndex);
  }, [initIndex]);

  const showDay =
    listDay && listDay.length > 0
      ? listDay[currentIndex]
      : dayjs().format('YYYY/MM/DD');

  const onSlideTimeline = React.useCallback(
    (newIndex: number) => {
      if (newIndex > countDay - 1) {
        return;
      }
      setCurrentIndex(newIndex);
    },
    [countDay],
  );
  return (
    <View style={style.contain}>
      <View style={style.dayView}>
        <Text>{showDay}</Text>
      </View>
      <FullTimeline
        timeData={timeData}
        ref={timelineRef}
        onChangeDay={onSlideTimeline}
        initIndex={initIndex}
        noLimitTmpGrantFlg={noLimitTmpGrantFlg}
      />
    </View>
  );
};

export default TimelineSection;

const style = StyleSheet.create({
  contain: {
    marginBottom: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'column',
  },
  dayView: {flexDirection: 'row', justifyContent: 'center'},
});
