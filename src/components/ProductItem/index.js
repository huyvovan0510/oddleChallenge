import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

import Button from '@components/Button';
import IconStar from '@components/Icons/IconStar';
import IconPrice from '@components/Icons/IconPrice';
import IconInfo from '@components/Icons/IconInfo';
import {H3, SParagraph} from '@components/Typography';
import {addToFavorites, removeFavorites} from '@network/oddoleNetwork';
import {onLikeProduct, onUnLikeProduct} from '@redux/action/favotitesAction';
import NavigationService from '@navigation/NavigationService';
import FavoriteButton from '../FavoriteButton';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width - 30;

const ProductItem = ({
  item,
  renderFavBtn,
  itemWidth = ITEM_WIDTH,
  disableDoubleTap = false,
}) => {
  const dispatch = useDispatch();
  const lastTap = useRef(0);
  const favoriteRef = useRef(null);

  const onFavorite = liked => {
    liked ? unLike() : onLike();
  };

  const onLike = () => {
    dispatch(onLikeProduct({...item}));
    addToFavorites(item?.id);
  };

  const unLike = () => {
    dispatch(onUnLikeProduct({id: item.id}));
    removeFavorites(item?.id);
  };

  const doubleTap = () => {
    const now = Date.now();
    const DELAY = 300;
    if (lastTap.current && now - lastTap.current < DELAY) {
      const isLiked = favoriteRef.current.isActive;
      onFavorite(isLiked);
    } else {
      lastTap.current = now;
    }
  };

  const favoritesBtn = () => {
    if (renderFavBtn) {
      return renderFavBtn(item);
    }
    return (
      <FavoriteButton
        ref={favoriteRef}
        productId={item?.id}
        onPress={onFavorite}
      />
    );
  };

  const onViewBrand = () => {
    Linking.openURL(item?.websiteLink);
  };

  const goToProductDetails = () => {
    NavigationService.navigate('ProductDetails', {params: item});
  };

  return (
    <View style={[styles.container, {width: itemWidth}]}>
      <TouchableOpacity
        onPress={doubleTap}
        disabled={disableDoubleTap}
        activeOpacity={1}>
        <ImageBackground
          resizeMode="center"
          source={{uri: `https:${item?.apiFeaturedImage}`}}
          style={styles.thumb}>
          <View style={styles.brandTag}>
            {item?.brand && <SParagraph>{item?.brand}</SParagraph>}
          </View>

          {favoritesBtn()}
        </ImageBackground>
      </TouchableOpacity>

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
        <View style={[styles.row, styles.btnBox]}>
          <Button
            mode="outlined"
            type="small"
            style={styles.btnView}
            onPress={onViewBrand}>
            {'View brand'}
          </Button>
          <Button mode="contained" type="small" onPress={goToProductDetails}>
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
    width: ITEM_WIDTH,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 15,
    alignSelf: 'center',
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
    flex: 1,
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
  btnBox: {
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 8,
  },
});
