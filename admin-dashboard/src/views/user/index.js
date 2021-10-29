import React, { Suspense } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import UserLayout from "../../layout/UserLayout";

const Login = React.lazy(() => import("./LoginPage"));
const Register = React.lazy(() => import("./Signup"));

const User = ({ match }) => {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
          <Route
            path={`${match.url}/login`}
            render={(props) => <Login {...props} />}
          />
          <Route
            path={`${match.url}/register`}
            render={(props) => <Register {...props} />}
          />
        </Switch>
      </Suspense>
    </UserLayout>
  );
};

export default User;
