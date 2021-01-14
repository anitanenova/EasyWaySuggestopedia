import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  EditButton,
} from "react-admin";

import InvoiceShow from "./invoiceShow";

const InvoiceList = (props: any) => (
  <List {...props} perPage={25}>
    <Datagrid rowClick="expand" expand={<InvoiceShow />}>
      <TextField source="id" />
      <DateField label="Дата" source="date" />
      <ReferenceField label="Клиент" source="customer_id" reference="customer">
        <TextField label="Име" source="name" />
      </ReferenceField>
      <NumberField label="Сума без такси" source="total_ex_taxes" />
      <NumberField label="Сума" source="taxes" />
      <EditButton />
    </Datagrid>
  </List>
);
export default InvoiceList;
