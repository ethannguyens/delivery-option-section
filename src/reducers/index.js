import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import deliveryOption from './deliveryOptionReducer'


const rootReducer = combineReducers({
  ajaxCallsInProgress,
  deliveryOption
});

export default rootReducer;
