import React from "react";
import styled from "styled-components";

import { getFontSize, getFontWeight } from "styles-guide/font";

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
  <Container
    size="regular"
    color={typeStyle === "ghost" ? COLORS.primary : COLORS.white}
    fontWeight="bold"
    typeStyle={typeStyle}
    {...propsContainer}
  >
    {renderLeft}
    {children}
    {renderRight}
  </Container>
);

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACING.small};
  background-color: ${COLORS.primary};
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
  border-radius: 2px;
  cursor: pointer;
  outline: 0;

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
