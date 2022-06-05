import React, {useMemo} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IconHeartOutlined from '@components/Icons/IconHeartOutlined';
import IconHeart from '@components/Icons/IconHeart';

import {useSelector} from 'react-redux';
const FavoriteButton = ({onPress, productId}) => {
  const {liked} = useSelector(state => state.favoritesReducer);
  const isActive = useMemo(() => !!liked[productId], [productId, liked]);
  return (
    <TouchableOpacity
      style={styles.btnLike}
      onPress={() => {
        onPress?.(isActive);
      }}>
      {isActive ? <IconHeart /> : <IconHeartOutlined />}
    </TouchableOpacity>
  );
};
export default FavoriteButton;
const styles = StyleSheet.create({
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
