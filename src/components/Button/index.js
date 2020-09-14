import React from "react";
import styled from "styled-components";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

const Button = ({
  isLoading,
  renderLeft,
  renderRight,
  children,
  propsContainer,
  typeStyle = "default",
  ...propsText
}) => (
  <Container typeStyle={typeStyle} {...propsContainer}>
    {renderLeft}
    <Text
      style={{ cursor: "pointer" }}
      size="regular"
      color={typeStyle === "ghost" ? COLORS.primary : COLORS.white}
      fontWeight="bold"
      {...propsText}
    >
      {children}
    </Text>
    {renderRight}
  </Container>
);

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACING.small};
  background-color: ${COLORS.primary};
  outline: 0;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${({ typeStyle }) =>
      typeStyle === "default" ? COLORS.dark : null};
  }

  ${({ typeStyle }) => {
    if (typeStyle === "ghost") {
      return {
        "background-color": "transparent",
        border: `1 solid ${COLORS.primary}`,
        "border-radius": "4px",
        padding: "12px",
      };
    }

    return {
      border: 0,
    };
  }}
`;

export default Button;
