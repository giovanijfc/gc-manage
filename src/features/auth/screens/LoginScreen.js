import React from "react";
import styled from "styled-components";

import ProjectDescription from "../components/ProjectDescription";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <Container>
      <ProjectDescription />
      <LoginForm />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

export default LoginScreen;
