import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOGGED_OUT,
} from "../actionTypes";
import AuthService from "../../services/AuthService";

const loginStart = () => {
  return { type: LOGIN_START };
};

const loginFailed = () => {
  return { type: LOGIN_FAILED };
};

const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const result = await AuthService.loginUser(data);

    if (result.status === 200) {
      const {
        data: { data },
      } = result;
      dispatch(loginSuccess(data));
    }
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
