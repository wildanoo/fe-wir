// export default (state = {}, action) => {
//   switch (action.type) {
//    case 'SIMPLE_ACTION':
//     return {
//      result: action.payload
//     }
//    default:
//     return state
//   }
//  }

import {
  GET_DATA_USERS_PROCESS,
  GET_DATA_USERS_SUCCESS,
  GET_DATA_USERS_FAILED
} from '../action.type';

const initialState = {
  dataUsers: []
};

export const getData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_USERS_PROCESS:
      return {
        ...state,
        dataUsers: []
      };
    case GET_DATA_USERS_SUCCESS:
      return {
        ...state,
        dataUsers: action.data
      };
    case GET_DATA_USERS_FAILED:
      return {
        ...state,
        dataUsers: []
      };
    default:
      return { ...state };
  }
};
