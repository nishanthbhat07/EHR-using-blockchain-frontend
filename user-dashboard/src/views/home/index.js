import React, { Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
const HomePage = React.lazy(() => import("./home"));

const Home = ({ match, history }) => {
  return (
    <AppLayout match={match} history={history}>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Route
            path={`${match.url}`}
            render={(props) => <HomePage {...props} />}
          />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default Home;
