import React from "react";
import styled from "styled-components";

import ProjectDescription from "../components/ProjectDescription";

const LoginScreen = () => {
  return (
    <Container>
      <ProjectDescription />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

export default LoginScreen;
