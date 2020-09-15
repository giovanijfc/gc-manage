import React, { useContext, forwardRef } from "react";
import styled from "styled-components";

import ControlCheckBoxContext from "contexts/ControlCheckBoxContext";

import COLORS from "styles-guide/COLORS";

import { HiCheck } from "react-icons/hi";

const CheckBox = forwardRef(
  (
    {
      renderLeft,
      renderRight,
      color,
      size,
      fontWeight,
      onChange,
      ...propsInput
    },
    ref
  ) => {
    const { isChecked, setIsChecked } = useContext(ControlCheckBoxContext);

    return (
      <Container>
        {renderLeft}
        <StyledInput
          ref={ref}
          color={color}
          size={size}
          fontWeight={fontWeight}
          {...propsInput}
          type="checkbox"
        />
        <StyledCheckMark
          onClick={() => {
            setIsChecked((prevIsChecked) => {
              onChange(!prevIsChecked);
              return !prevIsChecked;
            });
          }}
          isChecked={isChecked}
        >
          {isChecked && <HiCheck size="18px" color={COLORS.white} />}
        </StyledCheckMark>
        {renderRight}
      </Container>
    );
  }
);

const Container = styled.div`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckMark = styled.label`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.backgroundLight};
  cursor: pointer;

  &:hover {
    background-color: ${({ isChecked }) => !isChecked && COLORS.gray["500"]};
  }

  ${({ isChecked }) => {
    if (isChecked) {
      return {
        "background-color": COLORS.primary,
      };
    }
  }}
`;

export default CheckBox;
