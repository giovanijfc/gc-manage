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
import { ControlCheckBox, CheckBox, LabelCheckBox } from "components/CheckBox";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

import { MdEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";

const schema = yup.object().shape({
  email: yup.string().email("Email incorreto.").required("Email obrigatório."),
  password: yup
    .string()
    .min(6, "Mínimo de 6 dígitos para a senha.")
    .required("Senha obrigatória"),
});

const LoginForm = () => {
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <CreateAccountArea>
        <Text
          style={{ marginRight: SPACING.small }}
          size="small"
          fontWeight="regular"
          color={COLORS.gray["500"]}
        >
          Ainda não tem uma conta?
        </Text>
        <Button typeStyle="ghost">CRIAR UMA CONTA</Button>
      </CreateAccountArea>

      <StyledForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Text
          style={{ marginLeft: "-3px", marginBottom: "6px" }}
          size="high"
          fontWeight="bold"
        >
          Entre em GCMS
        </Text>
        <Text color={COLORS.gray["500"]} size="small" fontWeight="regular">
          Insira seus dados de login abaixo.
        </Text>

        <ControlInput
          style={{ marginTop: SPACING.medium }}
          isValid={!errors.email?.message}
        >
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
          <WrapperRow>
            <LabelInput>PASSWORD</LabelInput>
            <TextForgotPassword fontWeight="regular" color="black" size="small">
              Esqueceu sua senha?
            </TextForgotPassword>
          </WrapperRow>
          <Input
            ref={register}
            name="password"
            size="small"
            placeholder="Digite sua senha..."
            renderLeft={<IoIosKey size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>{errors.password?.message}</ErrorTextInput>
        </ControlInput>

        <ControlCheckBox style={{ marginBottom: "8px", marginTop: "8px" }}>
          <CheckBox
            onChange={(value) => {
              setValue("rememberCredentials", value);
            }}
            ref={register}
            name="rememberCredentials"
          />
          <LabelCheckBox>Lembrar-me</LabelCheckBox>
        </ControlCheckBox>

        <Button
          propsContainer={{
            style: { width: "50%", marginTop: SPACING.small },
          }}
          typeStyle="default"
          type="submit"
        >
          Entrar
        </Button>
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;

const StyledForm = styled.form`
  flex: 1;
  width: 28%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextForgotPassword = styled(Text)`
  cursor: pointer;
  text-decoration: underline;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
`;

const CreateAccountArea = styled.div`
  display: flex;
  flex-direct: row;
  justify-content: flex-end;
  align-items: center;
  margin: ${SPACING.medium} ${SPACING.medium} 0 0;
`;

export default LoginForm;
