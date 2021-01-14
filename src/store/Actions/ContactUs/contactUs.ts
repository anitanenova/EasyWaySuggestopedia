import * as httpClient from "../../../Helpers/HttpClient";
import { IMessage } from "../../../declarations/interfaces";

export const START_SENDING_CONTACT_US_MESSAGE =
  "SEND_REQUEST_CONTACT_US_MESSAGE";
export const sendRequestMessage = (): any => {
  return {
    type: START_SENDING_CONTACT_US_MESSAGE,
  };
};

export const SENT_CONTACT_US_FAILED = "SENT_CONTACT_US_FAILED";
export const sentMessageFailed = (): any => {
  return {
    type: SENT_CONTACT_US_FAILED,
  };
};

export const SENT_CONTACT_US_MESSAGE = "SENT_CONTACT_US_MESSAGE";
export const sentMessage = (): any => {
  return {
    type: SENT_CONTACT_US_MESSAGE,
  };
};

export const CONTACT_US_FORM_CHANGED = "CONTACT_US_FORM_CHANGED";
export const contactFormChanged = (): any => {
  return {
    type: CONTACT_US_FORM_CHANGED,
  };
};

export function sendMessage(message: IMessage): any {
  return (dispatch: any) => {
    dispatch(sendRequestMessage());
    return httpClient.firebasePost(
      `/contactUs`,
      message,
      (data) => {
        dispatch(sentMessage());
      },
      (error) => {
        dispatch(sentMessageFailed());
      }
    );
  };
}
