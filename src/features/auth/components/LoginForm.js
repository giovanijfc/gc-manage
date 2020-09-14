import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Button from "components/Button";
import Text from "components/Text";
import {
  ControlInput,
  Input,
  LabelInput,
  ErrorTextInput,
} from "components/Input";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

const schema = yup.object().shape({
  email: yup.string().email("Email incorreto.").required("Email obrigatório."),
  password: yup
    .string()
    .min("Mínimo de 6 dígitos para a senha.")
    .required("Senha obrigatória"),
});

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Text style={{ marginLeft: "-3px" }} size="high" fontWeight="bold">
        Entre em GCMS
      </Text>
      <Text color={COLORS.gray["500"]} size="small" fontWeight="light">
        Insira seus dados de login abaixo.
      </Text>

      <StyledForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <ControlInput isValid={!errors.email?.message}>
          <LabelInput>EMAIL</LabelInput>
          <Input
            ref={register}
            name="email"
            size="small"
            placeholder="exemplo@exemplo.com"
          />
          <ErrorTextInput>{errors.email?.message}</ErrorTextInput>
        </ControlInput>

        <ControlInput
          style={{ marginTop: SPACING.small }}
          isValid={!errors.password?.message}
        >
          <LabelInput>PASSWORD</LabelInput>
          <Input
            ref={register}
            name="password"
            size="small"
            placeholder="*********"
          />
          <ErrorTextInput>{errors.password?.message}</ErrorTextInput>
        </ControlInput>

        <Button type="submit" />
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
`;

const StyledForm = styled.form`
  width: 28%;
  display: flex;
  flex-direction: column;
  margin-top: ${SPACING.medium};
`;

export default LoginForm;
