import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const OnBoarding = React.lazy(() => import("./user-onboarding"));

const UserOnBoarding = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/`} />
      <Route
        path={`${match.url}/`}
        render={(props) => <OnBoarding {...props} />}
      />
    </Switch>
  </Suspense>
);
export default UserOnBoarding;
