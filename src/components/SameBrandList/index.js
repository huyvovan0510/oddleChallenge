import HorizontalList from '@components/HorizontalList';
import React from 'react';
import {StyleSheet} from 'react-native';
const RecommendedList = () => {
  return <HorizontalList data={[]} label="Because you love Huy" />;
};
export default RecommendedList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
