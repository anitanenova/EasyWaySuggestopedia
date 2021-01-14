import React from "react";
import { IAppContext } from "../../declarations/interfaces";

const AppContext = React.createContext<IAppContext>({} as IAppContext);

export default AppContext;
