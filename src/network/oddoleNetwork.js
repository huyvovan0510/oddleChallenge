import {BASE_URL, APP_ACC_NAME, API_KEY} from '../../appConfigs';
import axios from 'axios';

const API_ROUTE = `api/accounts/${APP_ACC_NAME}/favourites`;

export const addToFavorites = (productId, callback) => {
  axios({
    method: 'patch',
    url: `${BASE_URL}${API_ROUTE}/${productId}`,
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(response => {
      callback && callback(response?.data);
    })
    .catch(err => {
      console.log('[1;34m ~>>>>~ ERROR API ON FAVORITES', err);
    });
};

export const removeFavorites = (productId, callback) => {
  axios({
    method: 'delete',
    url: `${BASE_URL}${API_ROUTE}/${productId}`,
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(response => {
      callback && callback(response?.data);
    })
    .catch(err => {
      console.log('[1;34m ~>>>>> ERROR API REMOVE FAVORITES', err);
    });
};
export const getListFavorites = callback => {
  axios({
    method: 'get',
    url: `${BASE_URL}${API_ROUTE}`,
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(response => {
      const {data} = response?.data || {};
      callback && callback(data);
    })
    .catch(err => {
      console.log('[1;34m ~>>>>> ERROR API REMOVE FAVORITES', err);
    });
};
