import React from "react";
import styled from "styled-components";
import { WaveLoading } from "react-loadingg";

import COLORS from "styles-guide/COLORS";

const Loader = () => (
  <WrapperCenter>
    <WaveLoading
      size="small"
      color={COLORS.primary}
      style={{ position: "relative" }}
    />
  </WrapperCenter>
);

const WrapperCenter = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export default Loader;
