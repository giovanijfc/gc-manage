import React, { useContext } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

import ControlInputContext from "contexts/ControlInputContext";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";

const ErrorTextInput = ({ children, ...props }) => {
  const { isValid } = useContext(ControlInputContext);

  return (
    <Container>
      <Transition in={!isValid} timeout={300}>
        {(state) => (
          <WrapperAnimation style={{ ...transitionStyles[state] }}>
            <Text
              size="small"
              color={COLORS.error}
              fontWeight="bold"
              {...props}
            >
              {children}
            </Text>
          </WrapperAnimation>
        )}
      </Transition>
    </Container>
  );
};

const Container = styled.div`
  height: 23px;
`;

const WrapperAnimation = styled.div`
  display: flex;
`;

const transitionStyles = {
  entering: { opacity: 0, transform: "translateY(-30px)" },
  entered: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: "opacity 200ms, transform 200ms",
  },
  exiting: { opacity: 1 },
  exited: {
    opacity: 0,
    transform: "translateY(-30px)",
  },
};

export default ErrorTextInput;
