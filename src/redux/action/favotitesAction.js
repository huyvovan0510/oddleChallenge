export const LIKE_PRODUCT = 'LIKE_PRODUCT';
export const UNLIKE_PRODUCT = 'UNLIKE_PRODUCT';

export const onLikeProduct = payload => {
  return {
    type: LIKE_PRODUCT,
    payload,
  };
};

export const onUnLikeProduct = payload => {
  return {
    type: UNLIKE_PRODUCT,
    payload,
  };
};
