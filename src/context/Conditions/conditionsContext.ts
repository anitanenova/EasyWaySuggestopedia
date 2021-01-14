import React from "react";
import { IConditionsContext } from "../../declarations/interfaces";

const ConditionsContext = React.createContext<IConditionsContext>(
  {} as IConditionsContext
);

export default ConditionsContext;
