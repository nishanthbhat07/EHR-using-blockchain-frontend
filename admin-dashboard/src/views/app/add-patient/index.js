import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const AddPatient = React.lazy(() => import("./AddPatient"));

const AddPatients = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        exact
        path={`${match.url}`}
        render={(props) => <AddPatient {...props} />}
      />
    </Switch>
  </Suspense>
);
export default AddPatients;
