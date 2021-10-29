import React, { Suspense } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const Doctors = React.lazy(() => import("./doctors"));
const Patients = React.lazy(() => import("./patients"));
const AddDoctors = React.lazy(() => import("./add-doctor"));
const AddPatient = React.lazy(() => import("./add-patient"));
const ViewPatientMedical = React.lazy(() => import("./view-patient-medical"));
const ViewMyPatients = React.lazy(() => import("./view-my-patients"));
const App = ({ match }) => {
  console.log(match.url);
  if (localStorage.getItem("role") === "admin") {
    return (
      <AppLayout match={match}>
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/doctors`} />
            <Route
              path={`${match.url}/doctors`}
              render={(props) => <Doctors {...props} />}
            />
            <Route
              path={`${match.url}/patients`}
              render={(props) => <Patients {...props} />}
            />
            <Route
              path={`${match.url}/add-doctor`}
              render={(props) => <AddDoctors {...props} />}
            />
          </Switch>
        </Suspense>
      </AppLayout>
    );
  } else {
    return (
      <AppLayout match={match}>
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}`}
              to={`${match.url}/add-patient`}
            />
            <Route
              path={`${match.url}/add-patient`}
              render={(props) => <AddPatient {...props} />}
            />
            <Route
              path={`${match.url}/view-patient-medical`}
              render={(props) => <ViewPatientMedical {...props} />}
            />
            <Route
              path={`${match.url}/view-my-patient`}
              render={(props) => <ViewMyPatients {...props} />}
            />
          </Switch>
        </Suspense>
      </AppLayout>
    );
  }
};

export default App;
