const ROOT_URL = process.env.REACT_APP_ROOT_URL;
export const DataRequestAction = (
  method,
  apiName,
  requestType,
  data,
  Loading = "LOADING",
  ModalName = "Nothing",
  recordName
) => {
  return function (dispatch) {
    RequestProgress(dispatch, `${Loading}_START`);

    const token = localStorage.getItem("token");
    try {
      fetch(`${ROOT_URL}/${apiName}`, {
        method: method,
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token,
        }),
        body: JSON.stringify(data),
      })
        .then((response) => {
          response.json().then((response) => {
            if (response.status === "ERROR") {
              RequestFail(dispatch, requestType, response.message, "error");
            }
            if (response.status === "SUCCESS") {
              RequestSuccess(dispatch, requestType, response, data, recordName);
              RequestModalClose(dispatch, ModalName);
            }
          });
        })
        .catch((err) => {
          RequestFail(dispatch, requestType, "", "error");
          RequestModalClose(dispatch, ModalName);
        });
    } catch (error) {
      RequestFail(dispatch, requestType, "", "error");
    }
  };
};
export const DataGetAction = (
  apiName,
  requestType,
  data,
  Loading = "Nothing",
  ModalName = "",
  recordName
) => {
  return function (dispatch) {
    RequestProgress(dispatch, `${Loading}_START`);
    const token = localStorage.getItem("token");

    let param = "";
    if (data) {
      param = `/${JSON.stringify(data)}`;
    }

    let headers = {
      "Content-Type": "application/json",
      Authorization: token,
      APIType: "web",
    };

    try {
      fetch(`${ROOT_URL}/${apiName}${param}`, { headers })
        .then((response) => {
          if (response.status === 401) {
            RequestUnAuthorized(dispatch);
          }
          if (response.status === 404) {
            RequestFail(dispatch, requestType, "Request Fail outer", false);
          } else {
            response.json().then((response) => {
              RequestSuccess(dispatch, requestType, response, data, recordName);
              RequestModalClose(dispatch, ModalName);
            });
          }
        })
        .catch((err) => {
          RequestFail(dispatch, requestType, "Request Fail outer", err);
          RequestModalClose(dispatch, ModalName);
        });
    } catch (error) {
      RequestFail(dispatch, requestType, "Request Fail", error);
      RequestModalClose(dispatch, ModalName);
    }
  };
};
export const logoutFn = () => {
  return {
    type: "logout_success",
  };
};
function RequestFail(dispatch, type, textMessage, error) {
  dispatch({
    type: `${type}_FAILURE`,
    payload: textMessage,
    error,
  });
}
function RequestSuccess(dispatch, type, data, reqData, recordName) {
  dispatch({
    type: `${type}_SUCCESS`,
    payload: data,
    recordName: recordName,
    reqData,
  });
}
function RequestProgress(dispatch, type) {
  dispatch({
    type: `${type}`,
  });
}
function RequestModalClose(dispatch, ModalName) {
  if (ModalName !== "Nothing") {
    dispatch({
      type: "Hide_Modal",
      payload: null,
      ModalName: ModalName,
    });
  }
}
function RequestUnAuthorized(dispatch) {
  dispatch({
    type: "Show_Modal",
    payload: null,
    ModalName: "UN_AUTHORIZED",
  });
}
