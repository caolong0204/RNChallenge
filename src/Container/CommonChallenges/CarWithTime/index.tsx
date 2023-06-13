import React, {useCallback} from 'react';

import {data} from './carMock';
import {View} from 'react-native';
import {CarsWithTimeItem} from './CarsWithTimeItem';
import {FlashList} from '@shopify/flash-list';

export const CarsWithTimeList = () => {
  const renderItem = useCallback(
    // eslint-disable-next-line react/jsx-no-bind
    ({item}) => <CarsWithTimeItem data={item} />,
    [],
  );

  const renderItemSeparatorComponent = () => <View style={{height: 15}} />;

  const renderListHeaderComponent = useCallback(
    () => <View style={{height: 120}} />,
    [],
  );
  const renderListFooterComponent = useCallback(
    () => <View style={{height: 120}} />,
    [],
  );

  return (
    <FlashList
      data={data}
      extraData={JSON.stringify(data)}
      renderItem={renderItem}
      estimatedItemSize={364}
      ItemSeparatorComponent={renderItemSeparatorComponent}
      ListHeaderComponent={renderListHeaderComponent}
      ListFooterComponent={renderListFooterComponent}
      keyExtractor={(_, index: number) => {
        return index.toString();
      }}
      // progressViewOffset={100}
      viewabilityConfig={{
        waitForInteraction: true,
        itemVisiblePercentThreshold: 50,
        minimumViewTime: 100,
      }}
    />
  );
};
