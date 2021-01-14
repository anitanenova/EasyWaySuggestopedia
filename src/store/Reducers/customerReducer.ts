import * as actions from "../Actions/Customer";

import {
  ICustomerState,
  ICustomer,
  IAction,
  PaymentType,
} from "../../declarations/interfaces";

const initialState: ICustomerState = {
  isFetching: false,
  data: [],
  item: {} as ICustomer,
  lastUpdated: new Date(0),
  addedSuccessful: false,
  paymentType: PaymentType.NotSelected,
};

const reducer = (state = initialState, action: IAction<ICustomer>) => {
  switch (action.type) {
    case actions.ADD_CUSTOMER_START:
      return Object.assign({}, state, {
        isFetching: true,
      } as ICustomerState);
    case actions.ADD_CUSTOMER_FINISH:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.item,
        lastUpdated: action.receivedAt,
        addedSuccessful: true,
        paymentType: action.item.paymentType,
      } as ICustomerState);
    default:
      return state;
  }
};

export default reducer;
