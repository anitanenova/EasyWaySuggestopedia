import {
  IGallery,
  ScheduleType,
  IAction,
} from "../../../declarations/interfaces";
import * as firebaseClient from "../../../Helpers/firebase/client";
import { parceSnapshot } from "../../../Helpers/firebase/parcer";

export const REQUEST_GALERY = "REQUEST_GALERY";
function requestGallery() {
  return {
    type: REQUEST_GALERY,
  } as IAction<IGallery[]>;
}

export const RECEIVE_GALERY = "RECEIVE_GALERY";
function receiveGalery(data: IGallery[]) {
  return {
    type: RECEIVE_GALERY,
    data: data,
    receivedAt: new Date(Date.now()),
  } as IAction<IGallery>;
}

export function fetchGalery(): any {
  return (dispatch: any) => {
    dispatch(requestGallery());
    let galleryRef = firebaseClient.getCollection("gallery");

    return galleryRef.get().then((snapshot) => {
      debugger;
      dispatch(receiveGalery(parceSnapshot(snapshot) as IGallery[]));
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
      return dispatch(requestGallery());
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
    }
  };
}
