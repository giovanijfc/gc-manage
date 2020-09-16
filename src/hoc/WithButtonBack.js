import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Button from "components/Button";

import SPACING from "styles-guide/SPACING";
import COLORS from "styles-guide/COLORS";

import { AiOutlineArrowLeft } from "react-icons/ai";

const WithButtonBack = (Component) => {
  const WrapperWithButtonBack = () => {
    const history = useHistory();

    const onClickBackHandler = () => {
      history.goBack();
    };

    return (
      <div>
        <StyledButton onClick={onClickBackHandler}>
          <AiOutlineArrowLeft size="28px" color={COLORS.white} />
        </StyledButton>
        <Component />
      </div>
    );
  };

  return WrapperWithButtonBack;
};

const StyledButton = styled(Button)`
  display: flex;
  position: fixed;
  top: ${SPACING.small};
  left: ${SPACING.small};
`;

export default WithButtonBack;
