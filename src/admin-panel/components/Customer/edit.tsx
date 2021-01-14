import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  CardActions,
  ShowButton,
  SaveButton,
} from "react-admin";

const PostTitle: any = ({ record }) => {
  return <span>Customer: {record ? `"${record.name}"` : ""}</span>;
};

const CustomerEdit = (props) => (
  <Edit undoable={false} title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Имейл" source="email" />
      <TextInput label="Първо име" source="firstName" />
      <TextInput label="Фамилно име" source="lastName" />
      <TextInput label="Телефонен номер" source="phone" />
      <TextInput disabled label="Вид на плащането" source="paymentType" />
      <TextInput disabled label="Метод на плащането" source="paymentMethod" />
      <TextInput disabled label="Статус на плащането" source="paymentStatus" />
    </SimpleForm>
  </Edit>
);

export default CustomerEdit;
