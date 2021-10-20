import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MyPrescriptions = React.lazy(() => import("./MyPrescriptions"));

const Prescriptions = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={(props) => <MyPrescriptions {...props} />}
      />
    </Switch>
  </Suspense>
);
export default Prescriptions;
