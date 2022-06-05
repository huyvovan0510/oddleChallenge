import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IconHeartOutlined from '@components/Icons/IconHeartOutlined';
import IconHeart from '@components/Icons/IconHeart';

const FavoriteButton = ({onPress, productId}) => {
  const [isLiked, setIsLike] = useState(true);
  return (
    <TouchableOpacity
      style={styles.btnLike}
      onPress={() => {
        setIsLike(pre => !pre);
        onPress?.(isLiked, productId);
      }}>
      {isLiked ? <IconHeart /> : <IconHeartOutlined />}
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
