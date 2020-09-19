import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { createEmployees } from "services/employees";
import { createOrUpdateStore } from "services/stores";
import { checkHaveDuplicationEmail } from "services/user";

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
    const stores = [
      {
        name,
        employeesEmails: emails,
      },
    ];

    try {
      await Promise.all(
        emails.map(async (email) => {
          const emailsDuplicated = await checkHaveDuplicationEmail(email);

          if (emailsDuplicated.length > 0) {
            throw new Error(
              `O email "${email}" já esta cadastrado na base de dados, por favor tente utilizar outro.`
            );
          }
        })
      );

      await createOrUpdateStore(stores);
      await createEmployees(emails, temporallyPassword);

      let message = `Loja criada com sucesso. ATENÇÃO caso tenha cadastrado emails, todas as senhas dos emails foram criadas com esses digitos "${temporallyPassword}", não esqueça de anotalas...`;

      if (emails.length === 0) {
        message = "Loja criada com sucesso.";
      }

      setMessageResponse(message);
    } catch (error) {
      if (error?.message?.includes("O email")) {
        return setMessageResponse(error.message);
      }

      setMessageResponse(getResponseMessageByCode(error.code));

      console.log(error);
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
