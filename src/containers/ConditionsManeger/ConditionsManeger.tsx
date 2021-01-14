import React, { useContext, Fragment } from "react";
import { Conditions } from "../../components/Conditions";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";

import { ConditionsContext } from "../../context/Conditions";

interface IConditionsManegerProps extends RouteComponentProps {}

const ConditionsManeger = (props: IConditionsManegerProps) => {
  const conditionsContext = useContext(ConditionsContext);

  const hideHendler = () => {
    props.history.push(conditionsContext.rootPath);
  };

  let test: boolean = true;
  return (
    <Fragment>
      <Route
        path={`${props.match.path}/terms-and-conditions`}
        render={(props) => {
          return (
            <Conditions {...props} show={test} hideHendler={hideHendler} />
          );
        }}
      ></Route>
    </Fragment>
  );
};

export default withRouter(ConditionsManeger);
