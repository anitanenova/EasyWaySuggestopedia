import React, { Fragment } from "react";
import style from "./Layout.module.css";
import "../../../App.css";
import Navbar from "../../../components/Navbar/navbar";
import "../../../Styles/bootstrap-overights.css";
import "../../../Styles/btn-styles.css";
import "../../../Styles/text-styles.css";
import Footer from "../../../components/Footer/footer";
import { ApplyManeger } from "../../../containers/ApplyManeger";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";

import { ApplyContext } from "../../../context/Apply";
import { ConditionsContext } from "../../../context/Conditions";
import { ConditionsManeger } from "../../../containers/ConditionsManeger";

interface ILyoutProps extends RouteComponentProps {
  children: any;
  history: any;
}

const layout = React.memo((props: ILyoutProps) => {
  const rootPath = props.match.url;

  return (
    <Fragment>
      <Navbar />
      <main className={style.Content}>{props.children}</main>

      <Route
        path={`${props.match.url}/apply`}
        render={(props) => {
          return (
            <ApplyContext.Provider value={{ rootPath, history: props.history }}>
              <ApplyManeger {...props} />
            </ApplyContext.Provider>
          );
        }}
      />

      <Route
        path={`${props.match.url}`}
        render={(props) => {
          return (
            <ConditionsContext.Provider
              value={{ rootPath, history: props.history }}
            >
              <ConditionsManeger {...props} />
            </ConditionsContext.Provider>
          );
        }}
      />
      <Footer />
    </Fragment>
  );
});

export default withRouter(layout);
