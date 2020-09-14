import React from "react";
import styled from "styled-components";

import Text from "components/Text";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

import BackgroundPreviewImage from "assets/imgs/background-preview.jpg";

const ProjectDescription = () => {
  return (
    <Container>
      <Overlay>
        <ImageLogo src={require("assets/logos/logo.png")} />
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
            Um aplicativo de gerenciamento poderoso, mas fácil de usar em
            qualquer négocio!
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
};

const Container = styled.div`
  width: 31%;
  height: 100%;
  background-size: cover;
  background: url(${BackgroundPreviewImage});
  box-shadow: 4px 4px 4px ${COLORS.gray["500"]};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #44546599;
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
