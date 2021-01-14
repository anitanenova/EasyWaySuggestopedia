import { RECEIVE_GALERY, REQUEST_GALERY } from "../Actions/Galery";

import { IState, IGallery, IAction } from "../../declarations/interfaces";

const initialState: IState<IGallery> = {
  isFetching: false,
  data: [],
  item: {} as IGallery,
  lastUpdated: new Date(0),
};

const reducer = (state = initialState, action: IAction<IGallery>) => {
  switch (action.type) {
    case REQUEST_GALERY:
      return Object.assign({}, state, {
        isFetching: true,
      } as IState<IGallery>);
    case RECEIVE_GALERY:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt,
      } as IState<IGallery>);
    default:
      return state;
  }
};

export default reducer;
