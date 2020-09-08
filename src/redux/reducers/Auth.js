import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOGGED_OUT,
} from "../actionTypes/index";

const initialState = {
  isLoading: false,
  user: {},
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        token: null,
      };
    default:
      return state;
  }
};
