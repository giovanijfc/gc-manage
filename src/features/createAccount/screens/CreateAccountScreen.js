import React, { useState } from "react";
import styled from "styled-components";
import { auth, firestore } from "firebase";

import CreateAccountForm from "../components/CreateAccountForm";
import ModalFeedbackRequest from "components/Modal/ModalFeedbackRequest";

import WithButtonBack from "hoc/WithButtonBack";

import getResponseMessageByCode from "utils/getResponseMessageByCode";

const CreateAccountScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");

  const handleCloseModal = () => {
    setMessageResponse("");
  };

  const onCreateAccount = async (dataForm) => {
    setIsLoading(true);
    const { email, password, name, nameFantasyEnterprise } = dataForm;

    try {
      const successResponse = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      const userUid = successResponse.user.uid;

      await firestore().collection("customers").doc(userUid).set({
        id: userUid,
        name,
        nameFantasyEnterprise,
        firstAccess: true,
        role: "adm",
        email,
      });

      successResponse.user.sendEmailVerification();
    } catch (error) {
      setMessageResponse(getResponseMessageByCode(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <CreateAccountForm
        isLoading={isLoading}
        onCreateAccount={onCreateAccount}
      />

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

export default WithButtonBack(CreateAccountScreen);
