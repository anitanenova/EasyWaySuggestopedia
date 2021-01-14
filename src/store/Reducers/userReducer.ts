import {
  RECEIVE_USERS,
  REQUEST_USERS,
  RECEIVE_USER,
  REQUEST_USER,
} from "../Actions/User";

import { IState, IAction, IUser } from "../../declarations/interfaces";

const initialState: IState<IUser> = {
  isFetching: false,
  data: [],
  item: {} as IUser,
  lastUpdated: new Date(0),
};

const userReducer = (state = initialState, action: IAction<IUser>) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.item,
        lastUpdated: action.receivedAt,
      } as IState<IUser>);

    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
      } as IState<IUser>);

    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt,
      } as IState<IUser>);
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
      } as IState<IUser[]>);
    default:
      return state;
  }
};

export default userReducer;
