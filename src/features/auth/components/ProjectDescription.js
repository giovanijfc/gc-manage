import React from "react";
import styled from "styled-components";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

import BackgroundPreviewImage from "assets/imgs/background-preview.jpg";
import Logo from "assets/logos/logo.png";

const ProjectDescription = () => (
  <Container>
    <Overlay>
      <ImageLogo src={Logo} />
      <Text size="extraMedium" fontWeight="bold" color={COLORS.white}>
        GCMS
      </Text>
      <Text
        style={{ fontSize: "1em", marginTop: "6px" }}
        fontWeight="bold"
        color={COLORS.white}
      >
        GC Management System
      </Text>

      <WrapperDescription>
        <Text
          style={{ marginTop: "6px" }}
          size="extraRegular"
          fontWeight="light"
          color={COLORS.white}
        >
          Um aplicativo de gerenciamento poderoso, mas fácil de usar em qualquer
          négocio!
        </Text>
      </WrapperDescription>

      <Text
        style={{ position: "absolute", bottom: 20 }}
        size="small"
        color={COLORS.gray["400"]}
      >
        Versão 1.12.0
      </Text>
    </Overlay>
  </Container>
);

const Container = styled.div`
  width: 31%;
  height: 100%;
  background-size: cover;
  background: url(${BackgroundPreviewImage});
  box-shadow: 4px 4px 4px #0e0e0e;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e99;
`;

const WrapperDescription = styled.div`
  margin: ${SPACING.high} 90px;
  text-align: center;
`;

const ImageLogo = styled.img`
  width: 95px;
  height: 95x;
`;

export default ProjectDescription;
