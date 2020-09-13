import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginScreen from "features/auth/screens/LoginScreen";

const GuestNavigator = () => (
  <BrowserRouter>
    <div>
      <Route path="*" component={LoginScreen} />
    </div>
  </BrowserRouter>
);

export default GuestNavigator;
