import * as Actions from "./prescriptions.types";

const INIT_STATE = {
  user_prescriptions: [],
  loading: false,
  error: "",
};

const PrescriptionReducer = (state = INIT_STATE, actions) => {
  switch (actions.type) {
    case Actions.FETCH_USER_PRESCRIPTIONS_START:
      return { ...state, loading: true, user_prescriptions: [] };
    case Actions.FETCH_USER_PRESCRIPTIONS_SUCCESS:
      return { ...state, user_prescriptions: actions.payload, loading: false };
    case Actions.FETCH_USER_PRESCRIPTIONS_ERROR:
      return { ...state, error: actions.payload, loading: false };
    default:
      return { ...state };
  }
};
export default PrescriptionReducer;
