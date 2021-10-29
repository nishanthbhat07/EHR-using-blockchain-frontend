import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const ViewMedical = React.lazy(() => import("./ViewMedical"));

const ViewPatientMedical = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={(props) => <ViewMedical {...props} />}
      />
    </Switch>
  </Suspense>
);
export default ViewPatientMedical;
