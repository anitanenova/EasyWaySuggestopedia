import React from "react";
import { Create, SimpleForm, TextInput, EmailField } from "react-admin";

const CustomerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Име" source="name" />
      <TextInput label="Имейл" source="email" />
    </SimpleForm>
  </Create>
);

export default CustomerCreate;
