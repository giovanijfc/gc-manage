import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const SelectStoreScreen = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 100px;
`;

export default SelectStoreScreen;
