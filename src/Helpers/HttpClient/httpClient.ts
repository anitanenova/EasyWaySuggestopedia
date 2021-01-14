import appsettings from "../../appsettings.json";

export const get = (url, dispatch, callback, callbackError = null) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": appsettings.connection.origin,
  };
  let params = {
    method: "GET",
    headers: headers,
    enablePreflight: true,
  };
  return fetch(`${appsettings.connection.baseUrl}${url}`, params)
    .then((res) => res.json())
    .then(
      (data) => {
        callback(data);
      },
      (error) => {
        errorCallback(callbackError, error);
      }
    );
};

export const post = (url, data, callback, callbackError) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": appsettings.connection.origin,
  };

  let params = {
    method: "POST",
    headers: headers,
    enablePreflight: true,
    body: JSON.stringify(data),
  };

  return fetch(`${appsettings.connection.baseUrl}${url}`, params).then(
    (response) => {
      let isRequestSuccessful = response.ok;
      response.json().then(
        (data) => {
          if (!isRequestSuccessful) {
            errorCallback(callbackError, data);
          }
          callback(data);
        },
        (error) => {
          errorCallback(callbackError, error);
        }
      );
    }
  );
};

const errorCallback = (callback, error) => {
  if (callback) {
    (<any>callback).call(error);
  }
};
