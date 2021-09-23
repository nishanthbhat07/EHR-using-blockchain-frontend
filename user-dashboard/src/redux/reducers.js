import { combineReducers } from "redux";

import authUser from "./auth/user.reducer";
import menu from "./menu/menu.reducers";

const reducers = combineReducers({
  authUser,
  menu,
});

export default reducers;
