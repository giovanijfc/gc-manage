import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
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

import { validateEmail } from "utils/validate";

import COLORS from "styles-guide/COLORS";
import SPACING from "styles-guide/SPACING";

import { MdEmail } from "react-icons/md";
import { CgNametag } from "react-icons/cg";
import { IoMdPersonAdd, IoMdRemoveCircle } from "react-icons/io";

const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
});

const CreateStoreForm = ({ onCreateStore, isLoading }) => {
  const [employees, setEmployees] = useState([{ id: uuidv4(), email: "" }]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickAddEmployeeHandler = () => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { id: uuidv4(), email: "" },
    ]);
  };

  const onClickRemoveEmployeeHandler = (idToRemove) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter(({ id }) => id !== idToRemove)
    );
  };

  const onChangeEmployeeEmailHandler = (idToUpdate, newEmail) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) => {
        if (employee.id === idToUpdate) {
          return {
            ...employee,
            email: newEmail,
          };
        }

        return employee;
      })
    );
  };

  const onSubmitHandler = (data) => {
    const hasIncorrectEmail = employees.find(({ email }) =>
      email.length > 0 ? !validateEmail(email) : false
    );

    if (hasIncorrectEmail) {
      return;
    }

    onCreateStore({ ...data, employees });
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        <Text
          style={{ marginLeft: "-3px", marginBottom: "6px" }}
          size="high"
          fontWeight="bold"
        >
          Adicione uma loja.
        </Text>
        <Text color={COLORS.gray["500"]} size="small" fontWeight="regular">
          Digite os dados abaixo e clique em adicionar.
        </Text>

        <ControlInput
          style={{ marginTop: SPACING.medium }}
          isValid={!errors.name?.message}
        >
          <LabelInput>NOME DA LOJA</LabelInput>
          <Input
            ref={register}
            name="name"
            size="small"
            placeholder="Loja 1"
            renderLeft={<CgNametag size="23px" color={COLORS.primary} />}
          />
          <ErrorTextInput>{errors.name?.message}</ErrorTextInput>
        </ControlInput>
        <Button
          style={{
            marginTop: SPACING.small,
            display: "flex",
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
            width: "60px",
            height: "40px",
            backgroundColor: COLORS.success,
          }}
          type="button"
          onClick={onClickAddEmployeeHandler}
        >
          <IoMdPersonAdd size="23px" color={COLORS.white} />
        </Button>

        {employees.map(({ id, email }, index) => (
          <ControlInput
            key={id}
            isValid={email.length > 0 ? validateEmail(email) : true}
          >
            <LabelInput>FUNCIONARIO {1 + index}</LabelInput>
            <Input
              ref={register}
              name="email"
              size="small"
              value={email}
              onChange={({ target }) =>
                onChangeEmployeeEmailHandler(id, target.value)
              }
              placeholder={`Email do funcionário ${1 + index}`}
              renderLeft={<MdEmail size="23px" color={COLORS.primary} />}
              renderRight={
                index > 0 && (
                  <IoMdRemoveCircle
                    onClick={() => onClickRemoveEmployeeHandler(id)}
                    color={COLORS.error}
                    size="23px"
                  />
                )
              }
            />
            <ErrorTextInput>Email incorreto.</ErrorTextInput>
          </ControlInput>
        ))}

        <Button
          style={{ width: "50%", marginTop: SPACING.small }}
          isLoading={isLoading}
          typeStyle="default"
          type="submit"
        >
          Adicionar
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

export default CreateStoreForm;
