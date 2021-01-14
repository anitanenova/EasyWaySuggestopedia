import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const PostTitle: any = ({ record }) => {
  return <span>Фактура: {record ? `"${record.name}"` : ""}</span>;
};

const edit = (props) => (
  <Edit undoable={false} title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateInput label="Дата" source="date" />
      <NumberInput label="Сума без такси" source="total_ex_taxes" />
      <NumberInput label="Сума" source="taxes" />
    </SimpleForm>
  </Edit>
);

export default edit;
