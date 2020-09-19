import { useState, useLayoutEffect } from "react";

import { getUserLogged } from "services/user";

export default function useStore(hasUserLogged) {
  const [selectedStore, setSelectedStore] = useState(undefined);
  const [userLogged, setUserLogged] = useState(undefined);

  useLayoutEffect(() => {
    (async () => {
      if (hasUserLogged) {
        const userLoggedData = await getUserLogged();
        setUserLogged(userLoggedData);

        document.title = `Bem vindo ${
          userLoggedData.nameFantasyEnterprise || ""
        }`;
      }
    })();
  }, [hasUserLogged]);

  return { selectedStore, setSelectedStore, userLogged };
}
