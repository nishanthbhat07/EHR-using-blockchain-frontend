import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Doctors = React.lazy(() => import("./Doctors"));

const UserData = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route path={`${match.url}`} render={(props) => <Doctors {...props} />} />
    </Switch>
  </Suspense>
);
export default UserData;
