import React, { useState } from "react";
import styled from "styled-components";

import ControlCheckBoxContext from "contexts/ControlCheckBoxContext";

const ControlCheckBox = ({ initialChecked, children, ...propsContainer }) => {
  const [isChecked, setIsChecked] = useState(initialChecked || false);

  return (
    <ControlCheckBoxContext.Provider value={{ isChecked, setIsChecked }}>
      <Container {...propsContainer}>{children}</Container>
    </ControlCheckBoxContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ControlCheckBox;
