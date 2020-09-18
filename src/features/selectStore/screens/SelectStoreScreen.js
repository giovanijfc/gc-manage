import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

import ItemStore from "components/ItemStore";

const SelectStoreScreen = () => {
  return (
    <Container>
      <Header />

      <ItemStore data={{ name: "teste" }} />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 100px;
`;

export default SelectStoreScreen;
