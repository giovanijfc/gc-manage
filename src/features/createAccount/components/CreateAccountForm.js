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

import { MdEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

const schema = yup.object().shape({
  email: yup.string().email("Email incorreto.").required("Email obrigatório."),
  password: yup
    .string()
    .min(6, "Mínimo de 6 dígitos para a senha.")
    .required("Senha obrigatória"),
  nameFantasyEnterprise: yup.string().required("Nome Fantasia obrigatório."),
  name: yup.string().required("Nome obrigatório."),
});

const CreateAccountForm = ({ onCreateAccount, isLoading }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onCreateAccount)}>
        <Text
          style={{ marginLeft: "-3px", marginBottom: "6px" }}
          size="high"
          fontWeight="bold"
        >
          Crie sua conta
        </Text>
        <Text color={COLORS.gray["500"]} size="small" fontWeight="regular">
          Criar uma conta no GCMS é gratis. Insira seus dados para criar sua
          conta.
        </Text>

        <ControlInput
          style={{ marginTop: SPACING.medium }}
          isValid={!errors.name?.message}
        >
          <LabelInput>NOME COMPLETO</LabelInput>
          <Input
            ref={register}
            name="name"
            size="small"
            placeholder="Nome Sobrenome"
            renderLeft={<BsFillPersonFill size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>{errors.name?.message}</ErrorTextInput>
        </ControlInput>

        <ControlInput isValid={!errors.nameFantasyEnterprise?.message}>
          <LabelInput>NOME FANTASIA DO NÉGOCIO</LabelInput>
          <Input
            ref={register}
            name="nameFantasyEnterprise"
            size="small"
            placeholder="Padaria Estrela"
            renderLeft={<BsFillPersonFill size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>
            {errors.nameFantasyEnterprise?.message}
          </ErrorTextInput>
        </ControlInput>

        <ControlInput isValid={!errors.email?.message}>
          <LabelInput>EMAIL</LabelInput>
          <Input
            ref={register}
            name="email"
            size="small"
            placeholder="exemplo@exemplo.com"
            renderLeft={<MdEmail size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>{errors.email?.message}</ErrorTextInput>
        </ControlInput>

        <ControlInput
          style={{ marginTop: "3px" }}
          isValid={!errors.password?.message}
        >
          <LabelInput>PASSWORD</LabelInput>
          <Input
            ref={register}
            name="password"
            type="password"
            size="small"
            placeholder="Digite sua senha..."
            renderLeft={<IoIosKey size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>{errors.password?.message}</ErrorTextInput>
        </ControlInput>

        <Button
          style={{ width: "50%", marginTop: SPACING.small }}
          isLoading={isLoading}
          typeStyle="default"
          type="submit"
        >
          Criar conta
        </Button>
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  width: 23%;
  flex-direction: column;
`;

export default CreateAccountForm;
