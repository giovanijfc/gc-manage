import React, { useContext } from "react";
import styled from "styled-components";

import ControlCheckBoxContext from "contexts/ControlCheckBoxContext";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";

const LabelCheckBox = ({ children, ...props }) => {
  const { isChecked } = useContext(ControlCheckBoxContext);

  return (
    <Container>
      <Text
        size="small"
        color={COLORS.gray[isChecked ? "700" : "500"]}
        fontWeight="bold"
        {...props}
      >
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 5px;
`;

export default LabelCheckBox;
