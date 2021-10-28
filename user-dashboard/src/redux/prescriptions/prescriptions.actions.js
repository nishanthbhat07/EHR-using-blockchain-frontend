import * as Actions from "./prescriptions.types";

export const fetchUserPrescriptionStart = (user_id) => ({
  type: Actions.FETCH_USER_PRESCRIPTIONS_START,
  payload: { user_id },
});

export const fetchUserPrescriptionSuccess = (permissions_arr) => ({
  type: Actions.FETCH_USER_PRESCRIPTIONS_SUCCESS,
  payload: permissions_arr,
});

export const fetchUserPrescriptionError = (message) => ({
  type: Actions.FETCH_USER_PRESCRIPTIONS_ERROR,
  payload: { message },
});

const prescription_data = [
  {
    id: 0,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Fever",
    prescription_url:
      "https://ipfs.io/ipfs/QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    hash: "QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
  },
  {
    id: 1,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Stomach Ache",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 2,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Skin",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 3,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Hair",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
];
export const fetchUserPrescription = (user_id) => (dispatch) => {
  console.log("[IN PERMISSION ACTIONS]: ", user_id);
  dispatch(fetchUserPrescriptionStart(user_id));
  setTimeout(() => {
    return dispatch(fetchUserPrescriptionSuccess(prescription_data));
  }, 5000);
};
