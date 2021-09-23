import * as Actions from "./menu.types";

const INIT_STATE = {
  containerClassName: "menu-default menu-hidden main-hidden main-menu",
  user: localStorage.getItem("user"),
  visible: false,
};

const Menu = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Actions.SET_CONTAINER_NAMES:
      console.log("menu redux", action.payload.containerClassName);
      let classnames = action.payload.containerClassName.split(" ");
      var newClassname, visible;
      if (
        classnames.includes("main-show-temporary") &&
        classnames.includes("menu-sub-hidden")
      ) {
        newClassname = "menu-default menu-hidden main-hidden main-menu";
        visible = false;
      } else {
        newClassname =
          "menu-default main-menu main-show-temporary menu-sub-hidden";
        visible = true;
      }
      return {
        ...state,
        containerClassName: newClassname,
        visible: visible ? true : false,
      };
    default:
      return state;
  }
};

export default Menu;
