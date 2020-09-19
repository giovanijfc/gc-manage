import React, { useLayoutEffect, useContext, useState } from "react";
import styled from "styled-components";

import StoreContext from "contexts/StoreContext";

import ItemStore from "components/ItemStore";
import Text from "components/Text";

import { getAllStoresFromUser } from "services/stores";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

const ListStores = () => {
  const [stores, setStores] = useState([]);
  const { userLogged } = useContext(StoreContext);

  useLayoutEffect(() => {
    (async () => {
      if (userLogged) {
        const storesUpdate = await getAllStoresFromUser(userLogged);

        setStores(storesUpdate);
      }
    })();
  }, [userLogged]);

  return (
    <>
      <Text
        color={COLORS.primary}
        fontWeight="medium"
        size="extraHigh"
        style={{ marginTop: "50px" }}
      >
        Lojas
      </Text>
      <Text color={COLORS.gray["400"]} fontWeight="regular" size="medium">
        Selecione uma loja para gerenciar
      </Text>
      <StyledWrapperListStores>
        {stores.map((store, index) => (
          <StyledItemStore key={index} data={store} />
        ))}
      </StyledWrapperListStores>
    </>
  );
};

const StyledWrapperListStores = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const StyledItemStore = styled(ItemStore)`
  margin-right: ${SPACING.medium};
  margin-top: 20px;
`;

export default ListStores;
