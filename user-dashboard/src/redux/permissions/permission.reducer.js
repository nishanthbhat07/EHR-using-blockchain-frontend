import * as Actions from "./permission.type";

const INIT_STATE = {
  loading: false,
  user_permissions: [],
  error: "",
};

const PermissionReducer = (state = INIT_STATE, actions) => {
  switch (actions.type) {
    case Actions.FETCH_USER_PERMISSIONS_START:
      return { loading: true, error: "", user_permissions: [] };
    case Actions.FETCH_USER_PERMISSIONS_SUCCESS:
      return { user_permissions: actions.payload, loading: false, error: "" };
    case Actions.FETCH_USER_PERMISSIONS_ERROR:
      return { ...state, error: actions.payload, loading: false };
    default:
      return state;
  }
};
export default PermissionReducer;
