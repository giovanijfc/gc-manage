import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import SelectStoreScreen from "features/selectStore/screens/SelectStoreScreen";

const UserNavigator = () => (
  <HashRouter>
    <Route path="/select-store" component={SelectStoreScreen} />
    <Redirect to="/select-store" />
  </HashRouter>
);

export default UserNavigator;
