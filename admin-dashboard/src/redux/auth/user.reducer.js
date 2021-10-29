import * as Auth from "./user.types";

const INIT_STATE = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  error: "",
};

const UserReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Auth.LOGIN_USER_REQ:
    case Auth.REGISTER_USER_REQ:
      return { ...state, loading: true, error: "" };

    case Auth.LOGIN_USER_SUCCESS:
    case Auth.REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: "" };

    case Auth.LOGIN_USER_ERROR:
    case Auth.REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: "",
        error: action.payload.message,
      };

    default:
      return { ...state };
  }
};
export default UserReducers;
