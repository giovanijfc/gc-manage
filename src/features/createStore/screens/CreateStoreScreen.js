import React, { useState } from "react";
import styled from "styled-components";
import { auth, firestore } from "firebase";

import CreateAccountForm from "../components/CreateStoreForm";
import ModalFeedbackRequest from "components/Modal/ModalFeedbackRequest";

import WithButtonBack from "hoc/WithButtonBack";

import getResponseMessageByCode from "utils/getResponseMessageByCode";

const CreateStoreScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");

  const handleCloseModal = () => {
    setMessageResponse("");
  };

  const onCreateStore = async (dataForm) => {
    setIsLoading(true);
    const { name, employees } = dataForm;

    try {
    } catch (error) {
      setMessageResponse(getResponseMessageByCode(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <CreateAccountForm isLoading={isLoading} onCreateStore={onCreateStore} />

      <ModalFeedbackRequest
        messageResponse={messageResponse}
        handleCloseModal={handleCloseModal}
        isOpen={Boolean(messageResponse)}
      />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

export default WithButtonBack(CreateStoreScreen);
