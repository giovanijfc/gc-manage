import React, { useContext, forwardRef } from "react";
import styled from "styled-components";

import ControlInputContext from "contexts/ControlInputContext";

import COLORS from "styles-guide/COLORS";

import { getFontSize, getFontWeight } from "styles-guide/font";

const Input = forwardRef(
  (
    { renderLeft, renderRight, color, size, fontWeight, ...propsInput },
    ref
  ) => {
    const { isFocused, setIsFocused } = useContext(ControlInputContext);

    return (
      <Container isFocused={isFocused}>
        {renderLeft}
        <StyledInput
          ref={ref}
          color={color}
          size={size}
          fontWeight={fontWeight}
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...propsInput}
        />
        {renderRight}
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: ${COLORS.gray["200"]};
  border: 2px solid ${COLORS.gray["300"]};
  border-radius: 2px;

  ${({ isFocused }) => {
    if (isFocused) {
      return {
        "background-color": COLORS.white,
        border: `2px solid ${COLORS.blueLight}`,
      };
    }

    return null;
  }}
`;

const StyledInput = styled.input`
  flex: 1;
  margin-left: 7px;
  margin-right: 7px;
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
  background-color: ${COLORS.gray["200"]};
  outline: 0;
  border: 0;

  &::-webkit-input-placeholder {
    color: ${COLORS.gray["400"]};
  }

  ${({ isFocused }) => {
    if (isFocused) {
      return {
        "background-color": COLORS.white,
      };
    }

    return null;
  }}
`;

export default Input;
