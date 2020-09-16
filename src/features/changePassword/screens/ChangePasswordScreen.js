import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import styled from "styled-components";
import { auth } from "firebase";

import ModalFeedbackRequest from "components/Modal/ModalFeedbackRequest";
import Button from "components/Button";
import Text from "components/Text";
import {
  ControlInput,
  Input,
  LabelInput,
  ErrorTextInput,
} from "components/Input";

import WithButtonBack from "hoc/WithButtonBack";

import getResponseMessageByCode from "utils/getResponseMessageByCode";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

import { MdEmail } from "react-icons/md";

const schema = yup.object().shape({
  email: yup.string().email("Email incorreto.").required("Email obrigatório."),
});

const ChangePasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCloseModal = () => {
    setMessageResponse("");
  };

  const onResetPassword = async (dataForm) => {
    setIsLoading(true);
    const { email } = dataForm;

    try {
      await auth().sendPasswordResetEmail(email);
      setMessageResponse(
        `Verifique seu email, um email de redefinição de senha foi enviado para "${email}". Não se esqueça de olhar na caixa de Spam.`
      );
    } catch (error) {
      setMessageResponse(getResponseMessageByCode(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onResetPassword)}>
        <Text
          style={{ marginLeft: "-3px", marginBottom: "6px" }}
          size="high"
          fontWeight="bold"
        >
          Trocar sua senha
        </Text>
        <Text color={COLORS.gray["500"]} size="small" fontWeight="regular">
          Para trocar sua senha é bem simples, digite seu email no campo abaixo
          e clique em "Trocar senha".
        </Text>

        <ControlInput
          style={{ marginTop: SPACING.medium }}
          isValid={!errors.email?.message}
        >
          <LabelInput>Email</LabelInput>
          <Input
            ref={register}
            name="email"
            size="small"
            placeholder="EMAIL"
            renderLeft={<MdEmail size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>{errors.email?.message}</ErrorTextInput>
        </ControlInput>

        <Button
          style={{ width: "50%", marginTop: SPACING.small }}
          isLoading={isLoading}
          typeStyle="default"
          type="submit"
        >
          Trocar senha
        </Button>
      </StyledForm>

      <ModalFeedbackRequest
        messageResponse={messageResponse}
        handleCloseModal={handleCloseModal}
        isOpen={Boolean(messageResponse)}
      />
    </Container>
  );
};

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 23%;
  display: flex;
  flex-direction: column;
`;

export default WithButtonBack(ChangePasswordScreen);
