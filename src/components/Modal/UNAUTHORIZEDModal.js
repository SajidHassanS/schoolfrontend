import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { logoutFn } from "../../redux/actions/CommonHttp";
import { useNavigate } from "react-router";
const UNAUTHORIZEDModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.CurdR);
  const { UN_AUTHORIZED } = auth;
  const authProps = useSelector((state) => state.auth);
  const { authUser, logoutSuccess } = authProps;
  if (logoutSuccess && authUser === null) {
    navigate("/login");
    dispatch({ type: "Auth_Reset" });
  }

  return (
    <Modal
      closeIcon={false}
      closable={false}
      open={UN_AUTHORIZED}
      footer={false}
      centered
    >
      <div>
        <h1 className="text-center font-56 font-sans-bold">Session Expire</h1>
        <p className="text-center font-20 font-sans-bold">
          Your session has expired. Please login again to continue
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Button
          style={{ height: "54px" }}
          className="font-26 font-sans-bold"
          onClick={() => {
            dispatch({ type: "logout_success" });
            dispatch({
              type: "Hide_Modal",
              payload: null,
              ModalName: "UN_AUTHORIZED",
            });
          }}
        >
          Logout
        </Button>
      </div>
    </Modal>
  );
};

export default UNAUTHORIZEDModal;
