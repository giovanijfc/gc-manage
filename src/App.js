import React, { useEffect, useState } from "react";
import { auth } from "firebase";

import GuestNavigator from "navigators/GuestNavigator";

import Loader from "components/Loader";

const App = () => {
  const [hasUserLogged, setHasUserLogged] = useState(undefined);

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

  return hasUserLogged ? (
    <div onClick={() => auth().signOut()}>já logado</div>
  ) : (
    <GuestNavigator />
  );
};

export default App;
