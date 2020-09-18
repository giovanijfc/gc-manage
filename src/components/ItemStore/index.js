import React from "react";
import styled from "styled-components";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";

const ItemStore = ({ data, ...propsContainer }) => {
  const { name } = data;

  return (
    <StyledContainer {...propsContainer}>
      <StyledMockedImage>
        <Text fontWeight="bold" color={COLORS.white}>
          {name.substring(0, 8).toUpperCase()}
        </Text>
      </StyledMockedImage>
      <StyledWrapperText>
        <Text size="medium" fontWeight="medium" color={COLORS.primary}>
          {name}
        </Text>
      </StyledWrapperText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 250px;
  width: 22%;
  background-color: ${COLORS.backgroundLight};
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
  transition: transform 0.3s;
  box-shadow: 6px 8px 6px ${COLORS.primary};

  &:hover {
    transform: scale(1.08);
  }
`;

const StyledMockedImage = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primary};
  border-radius: 4px;
`;

const StyledWrapperText = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ItemStore;
