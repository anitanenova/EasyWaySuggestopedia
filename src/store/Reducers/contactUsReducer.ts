import {
  SENT_CONTACT_US_MESSAGE,
  START_SENDING_CONTACT_US_MESSAGE,
  SENT_CONTACT_US_FAILED,
  CONTACT_US_FORM_CHANGED,
} from "../Actions/ContactUs";

import { IContactUsState, IAction } from "../../declarations/interfaces";

const initialState = {} as IContactUsState;

const contactUsReducer = (state = initialState, action: IAction<null>) => {
  switch (action.type) {
    case SENT_CONTACT_US_MESSAGE:
      return Object.assign({}, state, {
        isFetching: false,
        sendFinished: true,
        sendFailed: false,
        lastUpdated: action.receivedAt,
      } as IContactUsState);
    case START_SENDING_CONTACT_US_MESSAGE:
      return Object.assign({}, state, {
        isFetching: true,
        sendFinished: false,
        sendFailed: false,
      } as IContactUsState);
    case SENT_CONTACT_US_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        sendFinished: true,
        sendFailed: true,
      } as IContactUsState);
    case CONTACT_US_FORM_CHANGED:
      return Object.assign({}, state, {
        isFetching: false,
        sendFinished: false,
        sendFailed: false,
      } as IContactUsState);
    default:
      return state;
  }
};

export default contactUsReducer;
