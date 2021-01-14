import appsettings from "../../appsettings.json";

export const post = (url, data, callback, callbackError) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let params = {
    method: "POST",
    headers: headers,
    enablePreflight: true,
    body: JSON.stringify(data),
  };

  return fetch(`${appsettings.connection.firebaseUrl}${url}`, params).then(
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
