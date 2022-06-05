import React, {Component, useMemo} from 'react';
import {FlatList, Dimensions, View, Text, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const ITEM_WIDTH_VERTICAL = width - 30;

const SPACE = 15;
const ListSkeleton = props => {
  const {horizontal} = props;
  const itemStyle = useMemo(() => {
    return {
      width: horizontal ? ITEM_WIDTH : ITEM_WIDTH_VERTICAL,
      marginBottom: 20,
      alignSelf: 'center',
    };
  }, [horizontal]);

  const renderItem = ({}) => {
    return (
      <View style={itemStyle}>
        <View style={styles.thumb} />
        <View style={styles.title} />
        <View style={styles.desc} />
      </View>
    );
  };

  return (
    <FlatList
      horizontal={horizontal}
      data={Array.from(Array(10).keys())}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.space} />}
    />
  );
};
export default ListSkeleton;
const styles = StyleSheet.create({
  space: {width: SPACE},
  thumb: {
    width: '100%',
    height: 283,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
  },
  title: {
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    width: '85%',
    height: 18,
    borderRadius: 10,
  },
  desc: {
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    width: '65%',
    height: 15,
    borderRadius: 10,
  },

  contentContainer: {paddingHorizontal: 15},
});
