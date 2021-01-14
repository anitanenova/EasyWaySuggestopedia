import { ICustomer, IAction } from "../../../declarations/interfaces";
import * as firebaseClient from "../../../Helpers/firebase/client";
import { parceSnapshot } from "../../../Helpers/firebase/parcer";

export const ADD_CUSTOMER_START = "ADD_CUSTOMER_START";
function addCustomerStart() {
  return {
    type: ADD_CUSTOMER_START,
  } as IAction<ICustomer>;
}

export const ADD_CUSTOMER_FINISH = "ADD_CUSTOMER_FINISH";
function addCustomerFinish(customer: ICustomer) {
  return {
    type: ADD_CUSTOMER_FINISH,
    item: customer,
    receivedAt: new Date(Date.now()),
  } as IAction<ICustomer>;
}

export function addCustomer(customer: ICustomer): any {
  return (dispatch: any) => {
    dispatch(addCustomerStart());

    return firebaseClient
      .getCollection("customer")
      .add(customer)
      .then(function (docRef) {
        dispatch(
          addCustomerFinish({
            ...customer,
            id: docRef.id,
          } as ICustomer)
        );
      });
  };
}

function shouldFetchPosts(state) {
  const posts = state.galery;
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded() {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(addCustomerStart());
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
    }
  };
}
