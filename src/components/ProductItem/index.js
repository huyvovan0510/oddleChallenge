import {H3, SParagraph} from '@components/Typography';
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import IconStar from '@components/Icons/IconStar';
import IconPrice from '@components/Icons/IconPrice';
import IconInfo from '@components/Icons/IconInfo';
import IconHeartOutlined from '@components/Icons/IconHeartOutlined';

import Button from '@components/Button';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = 282;

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="center"
        source={{uri: `https:${item?.apiFeaturedImage}`}}
        style={styles.thumb}>
        <View style={styles.brandTag}>
          {item?.brand && <SParagraph>{item?.brand}</SParagraph>}
        </View>

        <TouchableOpacity style={styles.btnLike}>
          <IconHeartOutlined />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.boxInfo}>
        <H3 numberOfLines={2} bold>
          {item?.name}
        </H3>
        <SParagraph color="#515151">
          {item?.tagList?.map(item => item).join(', ') || 'N/A'}
        </SParagraph>
        <View style={styles.row}>
          <View style={styles.rateBox}>
            <IconStar />
            <SParagraph style={styles.txtRate}>
              {item?.rating || 'N/A'}
            </SParagraph>
          </View>
          <View style={styles.priceBox}>
            <IconPrice />
            <SParagraph style={styles.txtRate}>
              {item?.price || 'N/A'}
            </SParagraph>
          </View>
        </View>
        <View style={styles.row}>
          <IconInfo />
          <SParagraph style={styles.txtRate}>
            {`${item?.category || 'N/A'} - ${item?.productType || 'N/A'}`}
          </SParagraph>
        </View>

        <View style={styles.row}>
          <Button mode="outlined" type="small" style={styles.btnView}>
            {'View brand'}
          </Button>
          <Button mode="contained" type="small">
            {'Order Now'}
          </Button>
        </View>
      </View>
    </View>
  );
};
export default ProductItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',

    // width: ITEM_WIDTH,
    borderRadius: 6,
    // overflow: 'hidden',
    marginBottom: 15,
  },

  thumb: {
    width: '100%',
    height: 283,
    backgroundColor: '#ffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRate: {
    marginLeft: 4,
  },
  priceBox: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInfo: {
    paddingHorizontal: 8,
  },
  btnView: {marginRight: 10},
  brandTag: {
    backgroundColor: '#F1F1F1',
    position: 'absolute',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 6,
    top: 15,
    left: 15,
  },
  btnLike: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 15,
    right: 15,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
