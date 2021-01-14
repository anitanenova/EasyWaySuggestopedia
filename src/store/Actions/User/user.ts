import { IUser, IAction } from "../../../declarations/interfaces";

import * as httpClient from "../../../Helpers/HttpClient";
import * as firebaseClient from "../../../Helpers/firebase/client";
import { parceSnapshot } from "../../../Helpers/firebase/parcer";

export const REQUEST_USERS = "REQUEST_USERS";
function requestUsers() {
  return {
    type: REQUEST_USERS,
  } as IAction<IUser[]>;
}

export const REQUEST_USER = "REQUEST_USER";
function requestUser() {
  return {
    type: REQUEST_USER,
  } as IAction<IUser>;
}

export const RECEIVE_USERS = "RECEIVE_USERS";
function receiveUsers(data: IUser[]) {
  return {
    type: RECEIVE_USERS,
    data: data,
    receivedAt: new Date(Date.now()),
  } as IAction<IUser>;
}

export const RECEIVE_USER = "RECEIVE_USER";
function receiveUser(data: IUser) {
  return {
    type: RECEIVE_USER,
    item: data,
    receivedAt: new Date(Date.now()),
  } as IAction<IUser>;
}

export function fetchUsers(): any {
  return (dispatch: any) => {
    dispatch(requestUsers());

    let userRef = firebaseClient.getCollection("user");
    let query = userRef;
    return query.get().then((snapshot) => {
      dispatch(receiveUsers(parceSnapshot(snapshot) as IUser[]));
    });
  };
}

export function fetchUser(id: string): any {
  return (dispatch: any) => {
    dispatch(requestUser());

    let userRef = firebaseClient.getCollection("user").doc(id);
    let query = userRef;
    return query.get().then((doc) => {
      if (doc.exists) {
        dispatch(receiveUser({ id, ...doc.data() } as IUser));
      } else {
        throw `user with id ${id} not exists`;
      }
    });
  };
}

//TODO
function shouldFetchPosts(state) {
  const posts = state.appointments;
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(type) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchUsers());
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
    }
  };
}
