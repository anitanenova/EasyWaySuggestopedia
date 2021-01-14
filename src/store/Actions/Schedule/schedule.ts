import {
  IAppointment,
  ScheduleType,
  IAction,
} from "../../../declarations/interfaces";
import * as firebaseClient from "../../../Helpers/firebase/client";
import { parceSnapshot } from "../../../Helpers/firebase/parcer";

export const REQUEST_SCHEDULE = "REQUEST_SCHEDULE";
function requestAppointments() {
  return {
    type: REQUEST_SCHEDULE,
  } as IAction<IAppointment[]>;
}

export const REQUEST_APPOINTMENT = "REQUEST_APPOINTMENT";
function requestAppointment() {
  return {
    type: REQUEST_APPOINTMENT,
  } as IAction<IAppointment>;
}

export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";
function receiveAppointment(data: IAppointment) {
  return {
    type: RECEIVE_APPOINTMENT,
    item: data,
    receivedAt: new Date(Date.now()),
  } as IAction<IAppointment>;
}

export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE";
function receiveAppointments(data: IAppointment[]) {
  return {
    type: RECEIVE_SCHEDULE,
    data: data,
    receivedAt: new Date(Date.now()),
  } as IAction<IAppointment>;
}

export function fetchAppointmentsByLevel(levelSymbol: string): any {
  return async (dispatch: any) => {
    dispatch(requestAppointments());
    let snapshot = await firebaseClient
      .getCollection("schedule")
      .where("levelSymbol", "==", levelSymbol)
      .get();

    dispatch(receiveAppointments(parceSnapshot(snapshot) as IAppointment[]));
  };
}

export function fetchAppointment(id: string): any {
  return (dispatch: any) => {
    dispatch(requestAppointment());

    let userRef = firebaseClient.getCollection("schedule").doc(id);
    let query = userRef;
    return query.get().then((doc) => {
      if (doc.exists) {
        dispatch(receiveAppointment({ id, ...doc.data() } as IAppointment));
      } else {
        throw `appointment with id ${id} not exists`;
      }
    });
  };
}

export function fetchSchedule(type?: ScheduleType, levelSymbol?: string): any {
  return (dispatch: any) => {
    dispatch(requestAppointments());
    let scheduleRef = firebaseClient.getCollection("schedule");
    let query: any = scheduleRef;

    if (type) {
      query = query.where("type", "==", type);
    }
    if (levelSymbol) {
      query = query.where("levelSymbol", "==", levelSymbol);
    }

    query.get().then((snapshot) => {
      dispatch(receiveAppointments(parceSnapshot(snapshot) as IAppointment[]));
    });
  };
}

function shouldFetchPosts(state, type: ScheduleType) {
  const posts = state.appointments[type];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(type: ScheduleType) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), type)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchSchedule(type));
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
    }
  };
}
