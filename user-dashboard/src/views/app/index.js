import React, { Suspense } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
const UserOnBoarding = React.lazy(() => import("./user-onboarding"));

const App = ({ match }) => {
  return (
    <AppLayout match={match}>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Route
            path={`${match.url}/user-on-boarding`}
            render={(props) => <UserOnBoarding {...props} />}
          />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
