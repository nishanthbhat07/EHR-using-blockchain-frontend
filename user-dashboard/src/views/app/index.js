import React, { Suspense } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const App = ({ match }) => {
  return (
    <AppLayout match={match}>
      <Suspense fallback={<div className="loading" />}>
        <Switch></Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
