import {
  RECEIVE_SCHEDULE,
  REQUEST_SCHEDULE,
  RECEIVE_APPOINTMENT,
  REQUEST_APPOINTMENT,
} from "../Actions/Schedule/schedule";

import { IState, IAppointment, IAction } from "../../declarations/interfaces";

const initialState: IState<IAppointment> = {
  isFetching: false,
  data: [],
  item: {} as IAppointment,
  lastUpdated: new Date(0),
};

const scheduleReducer = (
  state = initialState,
  action: IAction<IAppointment>
) => {
  switch (action.type) {
    case RECEIVE_APPOINTMENT:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.item,
        lastUpdated: action.receivedAt,
      } as IState<IAppointment>);
    case REQUEST_APPOINTMENT:
      return Object.assign({}, state, {
        isFetching: true,
      } as IState<IAppointment>);
    case REQUEST_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: true,
      } as IState<IAppointment>);
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt,
      } as IState<IAppointment>);
    default:
      return state;
  }
};

export default scheduleReducer;
