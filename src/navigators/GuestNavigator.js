import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import LoginScreen from "features/auth/screens/LoginScreen";
import CreateAccountScreen from "features/createAccount/screens/CreateAccountScreen";
import ChangePasswordScreen from "features/changePassword/screens/ChangePasswordScreen";

const GuestNavigator = () => (
  <HashRouter>
    <Route path="/login" component={LoginScreen} />
    <Route path="/create-account" component={CreateAccountScreen} />
    <Route path="/change-password" component={ChangePasswordScreen} />
    <Redirect to="/login" />
  </HashRouter>
);

export default GuestNavigator;
