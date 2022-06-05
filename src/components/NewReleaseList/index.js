import React, {useEffect, useState, memo} from 'react';

import HorizontalList from '@components/HorizontalList';
import {getProducts} from '@network/productApi';

const NewReleaseList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getRecommendedData();
  }, []);

  const getRecommendedData = async () => {
    const {result} = await getProducts({
      orderBy: 'publishedAt_DESC',
    });
    if (result) {
      setData(result);
    }
  };

  return <HorizontalList data={data} label="New products updated" />;
};
export default memo(NewReleaseList);
