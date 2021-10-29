import * as Actions from "./permission.type";

export const fetchUserPermissionStart = (user_id) => ({
  type: Actions.FETCH_USER_PERMISSIONS_START,
  payload: { user_id },
});

export const fetchUserPermissionSuccess = (permissions_arr) => ({
  type: Actions.FETCH_USER_PERMISSIONS_SUCCESS,
  payload: permissions_arr,
});

export const fetchUserPermissionError = (message) => ({
  type: Actions.FETCH_USER_PERMISSIONS_ERROR,
  payload: { message },
});

const permissions_data = [
  {
    id: 0,
    doctor_name: "Dr. Wolfeschlegelsteinhausenbergerdorff",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Fever",
    prescription_url:
      "https://ipfs.io/ipfs/QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    hash: "QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    purpose:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 1,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Stomach Ache",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
    purpose: "TP",
  },
  {
    id: 2,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Skin",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
    purpose: "TP",
  },
  {
    id: 3,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Hair",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
    purpose: "TP",
  },
];
export const fetchUserPermission = (user_id) => (dispatch) => {
  console.log("[IN PERMISSION ACTIONS]: ", user_id);
  dispatch(fetchUserPermissionStart(user_id));
  setTimeout(() => {
    return dispatch(fetchUserPermissionSuccess(permissions_data));
  }, 5000);
};
