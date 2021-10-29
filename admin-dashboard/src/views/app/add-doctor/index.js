import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const AddDoctor = React.lazy(() => import("./AddDoctor"));

const Prescriptions = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={(props) => <AddDoctor {...props} />}
      />
    </Switch>
  </Suspense>
);
export default Prescriptions;
