import React, { useContext } from "react";
import { Admin, Resource, translate } from "react-admin";

import customers from "./components/Customer";
import * as schedule from "./components/schedule";
import users from "./components/user";
import invoices from "./components/Invoice";
import galery from "./components/Gallery";
import { AppContext } from "../context/App";

// import { dataProvider } from "./data-provider";
import { createHashHistory } from "history";
import Dashboard from "./containers/Dashboard";

import createHistory from "history/createBrowserHistory";

import {
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
} from "@material-ui/icons";

import bulgarianMessages from "ra-language-bulgarian";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { dataProvider, authProvider } from "./providers/ftirebase";

const bulgarianMessagesExtendet = {
  ...bulgarianMessages,
  ra: {
    ...bulgarianMessages.ra,
    page: {
      ...bulgarianMessages.ra.page,
      empty: "Все още няма записи!",
      invite: "Искате ли да добавите?",
    },
    ...bulgarianMessages.ra,
    auth: {
      ...bulgarianMessages.ra.auth,
      auth_check_error:
        "Моля, въведете потребителското си име и парола, за да продължите",
    },
  },

  resources: {
    ...bulgarianMessages.resources,
    invoice: {
      ...bulgarianMessages.invoice,
      name: "Фактури",
    },
    gallery: {
      ...bulgarianMessages.gallery,
      name: "Галерия",
    },
    schedule: {
      ...bulgarianMessages.schedule,
      name: "График",
    },
    user: {
      ...bulgarianMessages.user,
      name: "Потребители",
    },
    customer: {
      ...bulgarianMessages.customer,
      name: "Клиенти",
    },
  },
};

const i18nProvider = polyglotI18nProvider(
  () => bulgarianMessagesExtendet,
  "bg"
);

const history = createHistory({ basename: "/admin" });

const AdminPanel = (props) => {
  return (
    <Admin
      locale="bg"
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      dashboard={Dashboard}
      title="Administaration"
    >
      <Resource
        name="customer"
        options={{
          label: translate("customer"),
        }}
        {...customers}
      />
      <Resource
        name="schedule"
        options={{
          label: translate("schedule"),
        }}
        list={schedule.all}
        create={schedule.create}
        edit={schedule.edit}
        icon={ScheduleIcon}
      />
      <Resource
        name="user"
        options={{
          label: translate("user"),
        }}
        {...users}
      />
      {/* <Resource
        name="invoice"
        options={{
          label: translate("invoice"),
        }}
        {...invoices}
      /> */}
      <Resource
        name="gallery"
        options={{
          label: translate("gallery"),
        }}
        {...galery}
      />
    </Admin>
  );
};

export default AdminPanel;
