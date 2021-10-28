import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const OnBoarding = React.lazy(() => import("./UserOnboarding"));
const UserMedical = React.lazy(() => import("./UserMedical"));

const UserOnBoarding = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        exact
        path={`${match.url}`}
        render={(props) => <OnBoarding {...props} />}
      />
      <Route
        path={`${match.url}/user-medical`}
        render={(props) => <UserMedical {...props} />}
      />
    </Switch>
  </Suspense>
);
export default UserOnBoarding;
