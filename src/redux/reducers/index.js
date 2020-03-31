import { combineReducers } from 'redux';
import { getData } from './users';
export default combineReducers({
  userList: getData
});