import ProductItem from '@components/ProductItem';
import {H3} from '@components/Typography';
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
const HorizontalList = ({data = [], label}) => {
  const renderItem = ({item, index}) => {
    return <ProductItem item={item} />;
  };

  return (
    <View style={styles.content}>
      <H3 style={styles.label} bold color="#000000">
        {label}
      </H3>
      <FlatList
        horizontal
        snapToInterval={297}
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        data={data}
        keyExtractor={item => `${item?.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.space} />}
      />
    </View>
  );
};
export default HorizontalList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {marginHorizontal: 15, marginBottom: 20},
  contentContainer: {paddingHorizontal: 15},
  space: {width: 15},
});
