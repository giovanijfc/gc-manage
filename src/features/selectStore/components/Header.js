import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth } from "firebase";

import Text from "components/Text";
import Button from "components/Button";

import StoreContext from "contexts/StoreContext";

import COLORS from "styles-guide/COLORS";

import { MdAddCircle } from "react-icons/md";

const Header = () => {
  const { userLogged } = useContext(StoreContext);
  const history = useHistory();

  const onClickAddStoreHandler = () => {
    history.push("/create-store");
  };

  const signOut = () => {
    auth().signOut();
  };

  return (
    <Container>
      <Text color={COLORS.primary} fontWeight="regular">
        Bem vindo {userLogged?.name || "..."}
      </Text>

      <Text
        onClick={signOut}
        color={COLORS.info}
        size="extraRegular"
        fontWeight="regular"
      >
        Sair
      </Text>

      <Button
        onClick={onClickAddStoreHandler}
        size="extraRegular"
        typeStyle="ghost"
      >
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
  align-items: center;
`;

const WrapperCenterButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

export default Header;
