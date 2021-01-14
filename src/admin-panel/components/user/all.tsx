import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ImageField,
  EditButton,
} from "react-admin";

const FilterConfig = (props) => (
  <Filter {...props}>
    <TextInput label="Търси" source="search" alwaysOn />
  </Filter>
);

const list = (props) => (
  <List filters={<FilterConfig />} {...props}>
    <Datagrid>
      <ImageField label="Снимка" source="image" title="title" />
      <TextField label="Име" source="firstName" />
      <TextField label="Фамилия" source="lastName" />
      <TextField label="Длъжност" source="position" />
      <TextField label="Описание" source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

export default list;
