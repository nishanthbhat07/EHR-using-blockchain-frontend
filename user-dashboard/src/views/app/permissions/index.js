import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MyPermission = React.lazy(() => import("./MyPermission"));

const UserData = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={(props) => <MyPermission {...props} />}
      />
    </Switch>
  </Suspense>
);
export default UserData;
