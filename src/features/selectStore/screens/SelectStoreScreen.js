import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import ListStores from "../components/ListStores";

const SelectStoreScreen = () => {
  return (
    <Container>
      <Header />
      <ListStores />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

export default SelectStoreScreen;
