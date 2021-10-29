import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Patients = React.lazy(() => import("./Patients"));

const Patient = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={(props) => <Patients {...props} />}
      />
    </Switch>
  </Suspense>
);
export default Patient;
