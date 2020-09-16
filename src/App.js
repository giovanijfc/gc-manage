import React, { useEffect, useState } from "react";
import { auth } from "firebase";

import StoreContext from "contexts/StoreContext";

import useStore from "hooks/useStore";

import GuestNavigator from "navigators/GuestNavigator";
import UserNavigator from "navigators/UserNavigator";

import Loader from "components/Loader";

const App = () => {
  const [hasUserLogged, setHasUserLogged] = useState(undefined);
  const store = useStore(hasUserLogged);

  useEffect(() => {
    const authStateListener = auth().onAuthStateChanged((userLogged) => {
      setHasUserLogged(userLogged ? true : false);
    });

    return () => {
      authStateListener && authStateListener();
    };
  }, []);

  if (hasUserLogged === undefined) {
    return <Loader />;
  }

  if (hasUserLogged) {
    return (
      <StoreContext.Provider value={{ ...store }}>
        <UserNavigator />
      </StoreContext.Provider>
    );
  }

  return <GuestNavigator />;
};

export default App;
