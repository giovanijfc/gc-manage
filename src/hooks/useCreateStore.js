import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useCreateStore() {
  const [employees, setEmployees] = useState([]);

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

  return {
    employees,
    onClickAddEmployeeHandler,
    onClickRemoveEmployeeHandler,
    onChangeEmployeeEmailHandler,
  };
}
