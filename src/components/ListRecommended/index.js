import React, {useEffect, useState, memo} from 'react';
import {StyleSheet} from 'react-native';
import HorizontalList from '@components/HorizontalList';
import {getProducts} from '@network/productApi';

const RecommendedList = ({query}) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (query) {
      getRecommendedData();
    }
  }, [query]);

  const getRecommendedData = async () => {
    const {result} = await getProducts({
      orderBy: 'rating_DESC',
      where: {
        productType: 'mascara',
      },
    });
    if (result) {
      setData(result);
    }
  };

  return <HorizontalList data={data} label="Recommended for you" />;
};
export default memo(RecommendedList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
