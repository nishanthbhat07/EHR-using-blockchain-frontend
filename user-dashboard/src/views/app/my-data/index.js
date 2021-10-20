import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MyData = React.lazy(() => import("./MyData"));

const UserData = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route path={`${match.url}`} render={(props) => <MyData {...props} />} />
    </Switch>
  </Suspense>
);
export default UserData;
