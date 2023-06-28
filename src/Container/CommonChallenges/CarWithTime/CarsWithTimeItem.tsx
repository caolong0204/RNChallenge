/* eslint-disable camelcase */
import React from 'react';

import {View} from 'react-native';
import TimelineSection from './TimeLineSection';
import {TimeDataType} from './FullTimeLine';

type Props = {
  data?: any;
};

export const CarsWithTimeItem = ({data}: Props) => {
  const {
    user_start_time,
    user_end_time,
    start_business_time,
    end_business_time,
    list_unavailable_time,
    start_period_date,
    end_period_date,
  } = data;

  const timeData: TimeDataType = {
    user_start_time,
    user_end_time,
    start_business_time,
    end_business_time,
    list_unavailable_time,
    start_period_date,
    end_period_date,
  };

  return (
    <View style={{flexDirection: 'column', marginHorizontal: 10, height: 360}}>
      <TimelineSection timeData={timeData} />
    </View>
  );
};
