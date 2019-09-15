import { combineReducers } from 'redux';
import modalReducer from './modal';
import taskReducer from './task';

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
