import React from "react";
import styled from "styled-components";

import ItemStore from "components/ItemStore";
import Text from "components/Text";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

const ListStores = () => {
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
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
        <StyledItemStore data={{ name: "Loja 1" }} />
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
