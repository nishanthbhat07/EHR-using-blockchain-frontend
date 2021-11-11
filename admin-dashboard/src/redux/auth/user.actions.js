import * as Auth from "./user.types";

// ACTIONS CREATORS

/** Login*/
export const loginUserRequest = (user, history) => ({
  type: Auth.LOGIN_USER_REQ,
  payload: { user, history },
});

export const loginUserSuccess = (user) => ({
  type: Auth.LOGIN_USER_SUCCESS,
  payload: user.user,
});

export const loginUserError = (message) => ({
  type: Auth.LOGIN_USER_ERROR,
  payload: { message },
});

/** Register*/
export const registerUserRequest = (user, history) => ({
  type: Auth.REGISTER_USER_REQ,
  payload: { user, history },
});

export const registerUserSuccess = (user) => ({
  type: Auth.REGISTER_USER_SUCCESS,
  payload: user.user,
});

export const registerUserError = (message) => ({
  type: Auth.REGISTER_USER_ERROR,
  payload: { message },
});

const user = {
  _id: { $oid: "60b09b0291efae7540ab81b2" },
  email: "nishanthbhat07@outlook.com",
  name: "Nishanth Bhat",
};

export const loginUser = (creds, history) => (dispatch) => {
  dispatch(loginUserRequest(creds, history));
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("role", "doctor");
  setTimeout(() => {
    dispatch(loginUserSuccess(user));
    history.push("/app");
  }, 2000);

  // return fetch("http://localhost:5000/login", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(creds),
  // })
  //   .then(
  //     (resp) => {
  //       if (resp.ok) {
  //         return resp;
  //       } else {
  //         var error = new Error(
  //           "Error " + resp.status + ": " + resp.statusText
  //         );
  //         error.resp = resp;
  //         throw error;
  //       }
  //     },
  //     (error) => {
  //       throw error;
  //     }
  //   )
  //   .then((resp) => resp.json())
  //   .then((resp) => {
  //     if (resp.success) {
  //       localStorage.setItem("token", resp.token);
  //       localStorage.setItem("user", JSON.stringify(resp.user));
  //       history.push("/app");
  //       // Dispatch the success action
  //       // console.log(resp);
  //       dispatch(loginUserSuccess(resp));
  //     }
  //   })
  //   .catch((e) => dispatch(loginUserError(e.message)));
};
export const registerUser = (creds, history) => (dispatch) => {
  dispatch(registerUserRequest(creds, history));

  history.push("/user/login");
  // return fetch("http://localhost:5000/register", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(creds),
  // })
  //   .then(
  //     (resp) => {
  //       if (resp.ok) {
  //         return resp;
  //       } else {
  //         var error = new Error(
  //           "Error " + resp.status + ": " + resp.statusText
  //         );
  //         error.resp = resp;
  //         throw error;
  //       }
  //     },
  //     (error) => {
  //       throw error;
  //     }
  //   )
  //   .then((resp) => resp.json())
  //   .then((resp) => {
  //     if (resp.success) {
  //       history.push("/user/login");
  //       // Dispatch the success action
  //       // dispatch(registerUserSuccess(resp));
  //     }
  //   })
  //   .catch((e) => dispatch(registerUserError(e.message)));
};
