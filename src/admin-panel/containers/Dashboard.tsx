import React, {
  useState,
  useEffect,
  useCallback,
  FC,
  CSSProperties,
} from "react";

import MonthlyRevenue from "../components/Dashboard/MonthlyRevenue";
import NbNewOrders from "../components/Dashboard/NbNewOrders";
import Welcome from "../components/Dashboard/Welcome";

import { useVersion, useDataProvider } from "react-admin";
import { useMediaQuery, Theme } from "@material-ui/core";
import { IInvoice, ICustomer } from "../../declarations/interfaces";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "1em" },
  rightCol: { flex: 1, marginLeft: "1em" },
  singleCol: { marginTop: "2em", marginBottom: "2em" },
};

const Dashboard: FC = () => {
  const [currencySymbol, setCurrencySymbol] = useState<string>("Лв. ");
  const [revenue, setRevenue] = useState<number>(0);
  const [newCustomersCount, setNewCustomersCount] = useState<number>(0);

  const version = useVersion();
  const dataProvider = useDataProvider();

  const fetchInvoices = useCallback(async () => {
    const date = new Date();

    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const recentInvoices: IInvoice[] = (
      await dataProvider.getList("invoice", {
        filter: { date_gte: firstDay.toISOString() },
        sort: { field: "date", order: "DESC" },
        pagination: { page: 1, perPage: 1000 },
      })
    ).data;
    const revenue = recentInvoices.reduce((sum: number, invoice: IInvoice) => {
      return sum + invoice.taxes + invoice.total_ex_taxes;
    }, 0);

    setRevenue(revenue);
  }, [dataProvider]);

  const fetchCustomers = useCallback(async () => {
    const date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const count: number = (
      await dataProvider.getList("customer", {
        filter: { date_gte: firstDay.toISOString() },
        sort: { field: "date", order: "DESC" },
        pagination: { page: 1, perPage: 1 },
      })
    ).total;

    setNewCustomersCount(count);
  }, [dataProvider]);

  useEffect(() => {
    fetchInvoices();
    fetchCustomers();
  }, [version]);

  return (
    <div style={styles.flex}>
      <div style={styles.leftCol}>
        <div style={styles.flex}>
          <MonthlyRevenue value={revenue} currencySymbol={currencySymbol} />
          <NbNewOrders value={newCustomersCount} />
        </div>
        <div style={styles.singleCol}>
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
