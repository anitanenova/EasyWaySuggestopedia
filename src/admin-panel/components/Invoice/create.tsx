import React from "react";
import {
  Create,
  SimpleForm,
  DateInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

const create = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput label="Дата" source="date" />
      <NumberInput label="Сума без такси" source="total_ex_taxes" />
      <NumberInput label="Сума" source="taxes" />
    </SimpleForm>
  </Create>
);

export default create;
