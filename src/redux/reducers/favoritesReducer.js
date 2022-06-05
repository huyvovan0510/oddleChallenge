import {LIKE_PRODUCT, UNLIKE_PRODUCT} from '../action/favotitesAction';

const initState = {
  liked: null,
};

const mainReduces = (state = initState, action) => {
  switch (action.type) {
    case LIKE_PRODUCT:
      const {id} = action?.payload || {};
      return {
        ...state,
        liked: {
          ...state.liked,
          [id]: {
            ...action?.payload,
          },
        },
      };
    case UNLIKE_PRODUCT:
      const obj = {...state?.liked};

      Object.keys(obj).forEach(function (key) {
        if (key === action?.payload?.id) {
          delete obj[key];
        }
      });

      return {...state, liked: obj};
    default:
      return state;
  }
};
export default mainReduces;
