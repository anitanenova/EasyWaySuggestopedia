import React from "react";
import { IApplyContext } from "../../declarations/interfaces";

const ApplyContext = React.createContext<IApplyContext>({} as IApplyContext);

export default ApplyContext;
