import React, { Fragment, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";
const UserView = React.lazy(() => import("./views/user"));
const AppView = React.lazy(() => import("./views/app"));
const MainView = React.lazy(() => import("./views"));

const AuthRoute = ({ component: Component, authUser, ...rest }) => {
  console.log("APP.js line 16", authUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/doctor/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
function App({ user }) {
  return (
    <Fragment>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <AuthRoute path="/app" authUser={user} component={AppView} />
            <Route path="/doctor" render={(props) => <UserView {...props} />} />
            <Route exact path="/" render={(props) => <MainView {...props} />} />
            )
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
}

const mapStateToProps = ({ authUser }) => ({
  user: authUser.user,
});

export default connect(mapStateToProps, null)(App);
