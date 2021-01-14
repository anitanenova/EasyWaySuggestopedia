import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
  DateField,
} from "react-admin";

const FilterConfig = (props) => (
  <Filter {...props}>
    <TextInput label="Търси" source="search" alwaysOn />
  </Filter>
);

const list = (props) => {
  return (
    <List filters={<FilterConfig />} {...props}>
      <Datagrid>
        <TextField label="Име" source="name" />
        <DateField label="Начална дата" source="dateFrom" />
        <DateField label="Крайна дата" source="dateTo" />
        <TextField label="Ниво" source="levelSymbol" />
        <TextField label="Вид" source="type" />
        <TextField label="Описание към цената" source="priceDescription" />
        <TextField label="Описание" source="description" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default list;
