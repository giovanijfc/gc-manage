import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import LoginScreen from "features/auth/screens/LoginScreen";
import CreateAccountScreen from "features/createAccount/screens/CreateAccountScreen";

const GuestNavigator = () => (
  <BrowserRouter>
    <div>
      <Route path="/login" component={LoginScreen} />
      <Route path="/create-account" component={CreateAccountScreen} />
      <Redirect to="/login" />
    </div>
  </BrowserRouter>
);

export default GuestNavigator;
