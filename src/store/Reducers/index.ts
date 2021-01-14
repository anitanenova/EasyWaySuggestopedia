import { combineReducers } from "redux";

import scheduleReducer from "../Reducers/scheduleReducer";
import contactUsReducer from "../Reducers/contactUsReducer";
import userReducer from "../Reducers/userReducer";
import galleryReducer from "../Reducers/galleryReducer";
import customerReducer from "../Reducers/customerReducer";

import { connectRouter } from "connected-react-router";
import { adminReducer } from "react-admin";

export const createRootReducer = ({ history }) => {
  const rootReducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
    scheduleReducer,
    contactUsReducer,
    userReducer,
    galleryReducer,
    customerReducer,
  });
  return rootReducer;
};

export default createRootReducer;
