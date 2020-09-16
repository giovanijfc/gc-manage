import React, { useContext } from "react";
import styled from "styled-components";

import Text from "components/Text";
import Button from "components/Button";

import StoreContext from "contexts/StoreContext";

import { MdAddCircle } from "react-icons/md";

const Header = () => {
  const { userLogged } = useContext(StoreContext);

  return (
    <Container>
      <Text fontWeight="semiBold">Bem vindo {userLogged?.name || "..."}</Text>

      <Button size="extraRegular" typeStyle="ghost">
        <WrapperCenterButton>
          <MdAddCircle style={{ marginRight: "5px" }} size="32px" />
          Adicionar Loja
        </WrapperCenterButton>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const WrapperCenterButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

export default Header;
