import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  maxLength,
  SelectInput,
} from "react-admin";
import {
  ScheduleType,
  ICourse,
  LevelSymbolType,
} from "../../../declarations/interfaces";
import data from "../../../data.json";

const PostTitle: any = ({ record }) => {
  return <span>График: {record ? `"${record.name}"` : ""}</span>;
};
const courses: ICourse[] = data.courses as ICourse[];
const validateDescription = maxLength(76);
const validateDescriptionPrice = maxLength(30);
const edit = (props) => (
  <Edit undoable={false} title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <SelectInput
        label="Име"
        source="name"
        choices={courses.map((item) => {
          return {
            id: item.title,
            name: item.title,
          };
        })}
      />
      <DateInput label="Начална дата" source="dateFrom" />
      <DateInput label="Крайна дата" source="dateTo" />
      <SelectInput
        label="Ниво"
        source="levelSymbol"
        choices={[
          {
            id: LevelSymbolType.A1,
            name: LevelSymbolType.A1,
          },
          {
            id: LevelSymbolType.A2,
            name: LevelSymbolType.A2,
          },
          {
            id: LevelSymbolType.B1,
            name: LevelSymbolType.B1,
          },
          {
            id: LevelSymbolType.B2,
            name: LevelSymbolType.B2,
          },
        ]}
      />
      <SelectInput
        label="Вид"
        source="type"
        choices={[
          {
            id: ScheduleType.Adult,
            name: ScheduleType.Adult,
          },
          { id: ScheduleType.Child, name: ScheduleType.Child },
        ]}
      />
      <TextInput
        label="Описание към цената"
        validate={validateDescriptionPrice}
        source="priceDescription"
      />
      <TextInput
        label="Описание"
        multiline
        source="description"
        validate={validateDescription}
      />
    </SimpleForm>
  </Edit>
);

export default edit;
