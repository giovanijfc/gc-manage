import React, { useEffect, useState } from "react";
import { auth } from "firebase";

import GuestNavigator from "navigators/GuestNavigator";

const App = () => {
  const [hasUserLogged, setHasUserLogged] = useState(false);

  useEffect(() => {
    const authStateListener = auth().onAuthStateChanged((userLogged) => {
      setHasUserLogged(userLogged ? true : false);
    });

    return () => {
      authStateListener && authStateListener();
    };
  }, []);

  return hasUserLogged ? <div>já logado</div> : <GuestNavigator />;
};

export default App;
