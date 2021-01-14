import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  maxLength,
  SelectInput,
} from "react-admin";
import {
  ScheduleType,
  LevelSymbolType,
  ICourse,
} from "../../../declarations/interfaces";
import data from "../../../data.json";

const validateDescription = maxLength(76);
const validateDescriptionPrice = maxLength(30);

const courses: ICourse[] = data.courses as ICourse[];

const ceate = (props) => (
  <Create {...props}>
    <SimpleForm>
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
        validate={validateDescription}
        multiline
        source="description"
      />
    </SimpleForm>
  </Create>
);

export default ceate;
