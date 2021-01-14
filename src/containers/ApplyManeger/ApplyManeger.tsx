import React, { useContext, Fragment } from "react";
import { ChoiseType } from "../../components/Apply/ChoiseType";
import { ChoiseGroup } from "../../components/Apply/ChoiseGroup";
import { DetermineLevel } from "../../components/Apply/DetermineLevel/DetermineLevel";
import { DetermineLevelGame } from "../../components/Apply/DetermineLevel/DetermineLevelGame";
import { SigningUp } from "../../components/Apply/SigningUp";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

import { ApplyContext } from "../../context/Apply";

interface IApplyManegerProps extends RouteComponentProps {}

const ApplyManeger = (props: IApplyManegerProps) => {
  const applyContext = useContext(ApplyContext);

  const hideHendler = () => {
    props.history.push(applyContext.rootPath);
  };

      let test: boolean = true;
  return (
    <Fragment>
      <Switch>
        <Route
          path={`${props.match.path}/choise-type`}
          render={(props) => {
            return (
                   <ChoiseType {...props} show={test} hideHendler={hideHendler} />
            );
          }}
        ></Route>
        <Route
          path={`${props.match.path}/determine-level`}
          render={(props) => {
            return (
              <DetermineLevel
                {...props}
                show={test}
                hideHendler={hideHendler}
              />
            );
          }}
        ></Route>
        <Route
          path={`${props.match.path}/determine-level-game`}
          render={(props) => {
            return (
              <DetermineLevelGame
                {...props}
                show={test}
                hideHendler={hideHendler}
              />
            );
          }}
        ></Route>
        <Route
          path={`${props.match.path}/choise-group`}
          render={(props) => {
            return (
              <ChoiseGroup {...props} show={test} hideHendler={hideHendler} />
            );
          }}
        ></Route>
        <Route
          path={`${props.match.path}/signing-up/:id`}
          render={(props) => {
            return (
              <SigningUp {...props} show={test} hideHendler={hideHendler} />
            );
          }}
        ></Route>
      </Switch>
    </Fragment>
  );
};

export default withRouter(ApplyManeger);
