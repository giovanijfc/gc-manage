import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import LoginScreen from "features/auth/screens/LoginScreen";
import CreateAccountScreen from "features/createAccount/screens/CreateAccountScreen";

const GuestNavigator = () => (
  <HashRouter>
    <div>
      <Route path="/login" component={LoginScreen} />
      <Route path="/create-account" component={CreateAccountScreen} />
      <Redirect to="/login" />
    </div>
  </HashRouter>
);

export default GuestNavigator;
