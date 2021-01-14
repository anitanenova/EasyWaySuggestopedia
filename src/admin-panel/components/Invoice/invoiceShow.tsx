import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useShowController, ReferenceField, TextField } from "react-admin";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

// import Basket from '../orders/Basket';
// import { FieldProps, Customer } from '../types';

const CustomerField: any = ({ record }) =>
  record ? <Typography>{record.name}</Typography> : null;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const InvoiceShow = (props: any) => {
  const { record } = useShowController(props);
  const classes = useStyles();

  if (!record) return null;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Клиент
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom align="right">
              {/* Фактура */}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} container alignContent="flex-end">
            <ReferenceField
              resource="invoice"
              reference="customer"
              source="customer_id"
              basePath="/invoice"
              record={record}
              link={false}
            >
              <CustomerField />
            </ReferenceField>
          </Grid>
        </Grid>
        <div className={classes.spacer}>&nbsp;</div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom align="center">
              Дата{" "}
            </Typography>
            <Typography gutterBottom align="center">
              {new Date(record.date).toLocaleDateString()}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="h6" gutterBottom align="center">
              Поръчка
            </Typography>
            {
              <ReferenceField
                resource="invoices"
                reference="schedule"
                source="schedule_id"
                basePath="/invoices"
                record={record}
                link={false}
              >
                <TextField
                  source="reference"
                  align="center"
                  component="p"
                  gutterBottom
                />
              </ReferenceField>
            }
          </Grid>
        </Grid>
        <div className={classes.invoices}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Продукт</TableCell>
                  <TableCell align="center">Количество</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="0">
                  <TableCell align="center">
                    Курс по класическа сугестопедия
                  </TableCell>
                  <TableCell align="center">1</TableCell>
                </TableRow>
                <TableRow key="0">
                  <TableCell align="right">Сума</TableCell>
                  <TableCell align="right">{record.total_ex_taxes}</TableCell>
                </TableRow>
                <TableRow key="0">
                  <TableCell align="right">Такси</TableCell>
                  <TableCell align="right">{record.taxes}</TableCell>
                </TableRow>
                <TableRow key="0">
                  <TableCell align="right">Общо</TableCell>
                  <TableCell align="right">
                    {record.total_ex_taxes + record.taxes}
                  </TableCell>
                </TableRow>
                {/* {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceShow;

const useStyles = makeStyles({
  root: { width: 600, margin: "auto" },
  spacer: { height: 20 },
  invoices: { margin: "10px 0" },
});
