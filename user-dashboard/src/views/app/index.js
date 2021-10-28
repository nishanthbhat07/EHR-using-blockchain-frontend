import React, { Suspense } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
const UserOnBoarding = React.lazy(() => import("./user-onboarding"));

const MyData = React.lazy(() => import("./my-data"));
const MyPermission = React.lazy(() => import("./permissions"));
const MyPrescriptions = React.lazy(() => import("./prescriptions"));
const App = ({ match }) => {
  console.log(match.url);
  return (
    <AppLayout match={match}>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}`} to={`${match.url}/my-data`} />
          <Route
            path={`${match.url}/user-on-boarding`}
            render={(props) => <UserOnBoarding {...props} />}
          />
          <Route
            path={`${match.url}/my-data`}
            render={(props) => <MyData {...props} />}
          />
          <Route
            path={`${match.url}/my-permissions`}
            render={(props) => <MyPermission {...props} />}
          />
          <Route
            path={`${match.url}/my-prescriptions`}
            render={(props) => <MyPrescriptions {...props} />}
          />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
