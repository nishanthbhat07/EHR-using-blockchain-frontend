import * as Actions from "./menu.types";

export const setContainerClassNames = (containerClassName) => ({
  type: Actions.SET_CONTAINER_NAMES,
  payload: containerClassName,
});
