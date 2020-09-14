import styled from "styled-components";

import { getFontSize, getFontWeight } from "styles-guide/font";

const Text = styled.label`
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
`;

export default Text;
