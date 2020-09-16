import React from "react";

import Button from "components/Button";
import Modal from "components/Modal";
import Text from "components/Text";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

const ModalFeedbackRequest = ({
  messageResponse,
  setMessageResponse,
  handleCloseModal,
  ...props
}) => (
  <Modal
    style={{
      background: COLORS.gray["100"],
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "300px",
      maxWidth: "600px",
      padding: SPACING.high,
    }}
    onRequestClose={handleCloseModal}
    {...props}
  >
    <Text size="extraRegular" fontWeight="regular">
      {messageResponse}
    </Text>

    <Button onClick={handleCloseModal} style={{ marginTop: SPACING.medium }}>
      Entendi
    </Button>
  </Modal>
);

export default ModalFeedbackRequest;
