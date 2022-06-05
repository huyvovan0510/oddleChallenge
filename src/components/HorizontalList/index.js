import ListSkeleton from '@components/ListSkeleton';
import ProductItem from '@components/ProductItem';
import {H3} from '@components/Typography';
import React from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const SPACE = 15;

const HorizontalList = ({data = [], label}) => {
  const renderItem = ({item, index}) => {
    return <ProductItem item={item} itemWidth={ITEM_WIDTH} />;
  };

  return (
    <View style={styles.content}>
      <H3 style={styles.label} bold color="#000000">
        {label}
      </H3>
      {data?.length > 0 ? (
        <FlatList
          horizontal
          snapToInterval={ITEM_WIDTH + SPACE}
          decelerationRate={'fast'}
          snapToAlignment={'start'}
          data={data}
          keyExtractor={item => `${item?.id}`}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.space} />}
        />
      ) : (
        <ListSkeleton horizontal={true} />
      )}
    </View>
  );
};
export default HorizontalList;
const styles = StyleSheet.create({
  content: {
    marginBottom: 20,
  },
  label: {marginHorizontal: 15, marginBottom: 20},
  contentContainer: {paddingHorizontal: 15},
  space: {width: SPACE},
});
