import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';

import {H1} from '@components/Typography';
import {
  addToFavorites,
  getListFavorites,
  removeFavorites,
} from '@network/oddoleNetwork';
import {useDispatch, useSelector} from 'react-redux';
import avatar from '@assets/images/avatar.png';
import ProductItem from '@components/ProductItem';
import FavoriteButtonCustomize from '@components/FavoriteButtonCustomize';
import {useIsFocused} from '@react-navigation/native';
import {onUnLikeProduct} from '@redux/action/favotitesAction';

const Favorites = ({navigation}) => {
  const [listLiked, setListLiked] = useState();
  const dispatch = useDispatch();
  const {liked} = useSelector(state => state.favoritesReducer);
  const listIdUnLike = useRef([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getFavoritesList();
    } else {
      removeListLikesFromRedux();
    }
  }, [isFocused, removeListLikesFromRedux]);

  const removeListLikesFromRedux = useCallback(() => {
    if (listIdUnLike.current?.length > 0) {
      listIdUnLike.current.forEach(id => {
        dispatch(onUnLikeProduct({id}));
      });
    }
  }, [dispatch]);

  const getFavoritesList = () => {
    getListFavorites(data => {
      if (data) {
        setListLiked(data);
      }
    });
  };

  const onFavorites = (isLiked, productId) => {
    if (isLiked) {
      removeFavorites(productId);
      listIdUnLike.current = [...listIdUnLike.current, productId];
    } else {
      addToFavorites(productId);
    }
  };

  const renderFavBtn = productData => {
    return (
      <FavoriteButtonCustomize
        productId={productData?.id}
        onPress={onFavorites}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return <ProductItem item={liked[item]} renderFavBtn={renderFavBtn} />;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={styles.boxInfo}>
          <H1 color="#0A3040" style={styles.userName} bold>
            {'Favorites'}
          </H1>
        </View>
        <Image source={avatar} style={styles.avatar} />
      </View>
      <FlatList
        style={styles.listStyle}
        data={listLiked}
        keyExtractor={item => `${item}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default Favorites;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 110,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
    zIndex: 2,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
