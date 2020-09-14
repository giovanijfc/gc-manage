import React from "react";
import styled from "styled-components";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";

const LabelInput = ({ children, ...props }) => (
  <Container>
    <Text size="small" color={COLORS.gray["500"]} fontWeight="bold" {...props}>
      {children}
    </Text>
  </Container>
);

const Container = styled.div`
  margin-bottom: 5px;
`;

export default LabelInput;
