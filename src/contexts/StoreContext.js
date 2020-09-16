import React from "react";

const storeContext = {
  selectedStore: undefined,
  userLogged: undefined,
};

export default React.createContext(storeContext);
