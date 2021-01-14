import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Filter,
  TextInput,
} from "react-admin";

const CustomerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Търси" source="search" alwaysOn />
  </Filter>
);

const customerList = (props) => (
  <List filters={<CustomerFilter />} {...props}>
    <Datagrid>
      <EmailField label="Имейл" source="email" />
      <TextField label="Първо име" source="firstName" />
      <TextField label="Фамилно име" source="lastName" />
      <TextField label="Телефонен номер" source="phone" />
      <TextField label="Вид на плащането" source="paymentType" />
      <TextField label="Метод на плащането" source="paymentMethod" />
      <TextField label="Статус на плащането" source="paymentStatus" />
      <EditButton />
    </Datagrid>
  </List>
);

export default customerList;
