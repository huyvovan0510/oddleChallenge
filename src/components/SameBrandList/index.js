import React, {useEffect, useState, memo} from 'react';
import HorizontalList from '@components/HorizontalList';
import {getProducts} from '@network/productApi';

const SameBrandList = ({query}) => {
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
        brand: "l'oreal",
      },
    });
    if (result) {
      setData(result);
    }
  };

  return <HorizontalList data={data} label={`Because you like ${query}`} />;
};
export default memo(SameBrandList);
