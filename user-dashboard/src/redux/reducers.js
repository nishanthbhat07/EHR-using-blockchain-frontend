import { combineReducers } from "redux";

import authUser from "./auth/user.reducer";
import menu from "./menu/menu.reducers";
import permissions from "./permissions/permission.reducer";
import prescriptions from "./prescriptions/prescriptions.reducers";

const reducers = combineReducers({
  authUser,
  menu,
  permissions,
  prescriptions,
});

export default reducers;
