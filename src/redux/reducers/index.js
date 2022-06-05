import {combineReducers} from 'redux';
import favoritesReducer from './favoritesReducer';

const allReducers = combineReducers({
  favoritesReducer,
});

export default allReducers;
