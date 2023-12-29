import React from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { confirm } = Modal;

const DeleteModal = ({
  buttonName = "Delete",
  style,
  title,
  content,
  okText = "Yes",
  cancelText = "No",
  apiName,
  requestType,
  data,
  recordName,
  method,
}) => {
  const ROOT_URL = process.env.REACT_APP_ROOT_URL;
  const dispatch = useDispatch();
  const crudRProps = useSelector((state) => state.crudR);
  const { success, error, textMessage } = crudRProps;
  const showDeleteConfirm = () => {
    confirm({
      title: `${title} ?`,
      icon: <ExclamationCircleFilled style={{ color: "#2196F3" }} />,
      content: content,
      okText: okText,
      okType: "custom",
      cancelButtonProps: "custom-cancel",
      cancelText: cancelText,

      onOk() {
        return new Promise((resolve, reject) => {
          const token = localStorage.getItem("token");
          fetch(`${ROOT_URL}/${apiName}`, {
            method: method,
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: token,
              APIType: "web",
            }),
            body: JSON.stringify(data),
          })
            .then((response) => {
              response.json().then((response) => {
                dispatch({
                  type: `${requestType}_SUCCESS`,
                  payload: response,
                  recordName: recordName,
                });
                resolve();
              });
            })
            .catch((err) => {
              dispatch({
                type: `${requestType}_FAILURE`,
                payload: "Some Error Occur While. Deleting Record",
              });
              reject();
            });
        }).catch(() => {
          dispatch({
            type: `${requestType}_FAILURE`,
            payload: "Some Error Occur While. Deleting Record",
          });
        });
      },
      onCancel() {},
    });
  };
  if (success) {
    message.success(textMessage);
    dispatch({ type: "ResetAll_State" });
  }
  if (error) {
    message.error(`${textMessage}`);
    dispatch({ type: "ResetAll_State" });
  }
  return (
    <div
      className="font-16 font-sans-regular"
      onClick={showDeleteConfirm}
      style={{ style, cursor: "pointer" }}
    >
      {buttonName}
    </div>
  );
};

export default DeleteModal;
