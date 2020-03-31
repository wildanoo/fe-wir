import {
  GET_DATA_USERS_PROCESS,
  GET_DATA_USERS_SUCCESS,
  GET_DATA_USERS_FAILED
} from '../action.type';

import { getDataUsers } from '../../services';

export const userAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action'
  })
 }

export const getData = params => async (dispatch) => {
  dispatch({
    type: GET_DATA_USERS_PROCESS,
    loading: true
  });
  try {
    const response = await getDataUsers(params);
    console.log('isi response : ', response)
    if (response) {
      dispatch({
        type: GET_DATA_USERS_SUCCESS,
        data: response
      });
    } else {
      dispatch({
        type: GET_DATA_USERS_FAILED,
        data: []
      });
    }
  } catch (err) {
    dispatch({
      type: GET_DATA_USERS_FAILED,
      data: []
    });
  }
}