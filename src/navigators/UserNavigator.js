import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import SelectStoreScreen from "features/selectStore/screens/SelectStoreScreen";
import CreateStoreScreen from "features/createStore/screens/CreateStoreScreen";

const UserNavigator = () => (
  <HashRouter>
    <Route path="/select-store" component={SelectStoreScreen} />
    <Route path="/create-store" component={CreateStoreScreen} />
    <Redirect to="/select-store" />
  </HashRouter>
);

export default UserNavigator;
