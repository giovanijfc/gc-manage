import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { createEmployees } from "services/employees";
import { createOrUpdateStore } from "services/stores";

import CreateAccountForm from "../components/CreateStoreForm";
import ModalFeedbackRequest from "components/Modal/ModalFeedbackRequest";

import WithButtonBack from "hoc/WithButtonBack";

import getResponseMessageByCode from "utils/getResponseMessageByCode";

const CreateStoreScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");
  const history = useHistory();

  const handleCloseModal = () => {
    if (messageResponse.includes("Loja criada com sucesso.")) {
      history.replace("/select-store");
    }

    setMessageResponse("");
  };

  const onCreateStore = async (dataForm) => {
    setIsLoading(true);
    const { name, employees } = dataForm;
    const temporallyPassword = uuidv4().substring(0, 6);
    const emails = employees.map(({ email }) => email);
    const store = [
      {
        name,
        employeesEmails: emails,
      },
    ];

    try {
      await createOrUpdateStore(store);
      await createEmployees(emails, temporallyPassword);

      let message = `Loja criada com sucesso. ATENÇÃO caso tenha cadastrados emails, todas as senhas dos emails foram criadas com esses digitos "${temporallyPassword}", não esqueça de anotalas...`;

      if (emails.length === 0) {
        message = "Loja criada com sucesso.";
      }

      setMessageResponse(message);
    } catch (error) {
      setMessageResponse(getResponseMessageByCode(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <CreateAccountForm isLoading={isLoading} onCreateStore={onCreateStore} />

      <ModalFeedbackRequest
        messageResponse={messageResponse}
        handleCloseModal={handleCloseModal}
        isOpen={Boolean(messageResponse)}
      />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;

export default WithButtonBack(CreateStoreScreen);
