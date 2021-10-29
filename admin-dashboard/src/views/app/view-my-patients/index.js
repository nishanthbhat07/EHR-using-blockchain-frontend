import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const ViewPatient = React.lazy(() => import("./ViewPatients"));

const ViewMyPatients = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={(props) => <ViewPatient {...props} />}
      />
    </Switch>
  </Suspense>
);
export default ViewMyPatients;
