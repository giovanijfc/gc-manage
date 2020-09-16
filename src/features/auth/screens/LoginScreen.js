import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "firebase";

import ProjectDescription from "../components/ProjectDescription";
import LoginForm from "../components/LoginForm";
import ModalFeedbackRequest from "components/Modal/ModalFeedbackRequest";

import getResponseMessageByCode from "utils/getResponseMessageByCode";

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");

  const handleCloseModal = () => {
    setMessageResponse("");
  };

  const onLogin = async (dataForm) => {
    setIsLoading(true);
    const { email, password, rememberCredentials } = dataForm;

    try {
      localStorage.setItem("$$rememberCredentials", rememberCredentials);
      localStorage.setItem(
        "$$credentials",
        JSON.stringify({ email, password })
      );
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setMessageResponse(getResponseMessageByCode(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ProjectDescription />
      <LoginForm isLoading={isLoading} onLogin={onLogin} />

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

export default LoginScreen;
