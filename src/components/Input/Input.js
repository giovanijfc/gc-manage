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
      <Container>
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
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: ${COLORS.gray["200"]};
  padding: 12px;
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
  border: 1px solid ${COLORS.gray["700"]};
  border-radius: 2px;
  outline: 0;

  ${({ isFocused }) => {
    if (isFocused) {
      return {
        "background-color": COLORS.white,
        border: `1px solid ${COLORS.blueLight}`,
      };
    }

    return null;
  }}
`;

export default Input;
