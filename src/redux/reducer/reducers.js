import { combineReducers } from 'redux';
import PhotoReducer from './photoReducer';

const AllReducers = combineReducers({
  PhotoReducer,
});
export { AllReducers as default };
