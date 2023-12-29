import { Button, Form, Modal, message } from "antd";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataRequestAction } from "../../redux/actions/CommonHttp";

const FormModal = ({
  showFooter = true,
  visible,
  modalTitle,
  children,
  ModalName,
  Spinner,
  form,
  initialValues,
  method,
  apiName,
  requestType,
  spinnerCaseName = "ModalSpin",
  recordName,
  cancelButtonName,
  submitButtonName,
  width,
  extraFieldName,
  extraFieldValue,
  layout = "vertical",
}) => {
  const dispatch = useDispatch();
  const crudProps = useSelector((state) => state.crudR);
  const { success, error, textMessage } = crudProps;
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (extraFieldName) {
          values[extraFieldName] = extraFieldValue;
        }
   
        if (initialValues && initialValues._id) {
          values._id = initialValues._id;
        }

        if (values && values.email) {
          values.email = values.email.toLowerCase();
        }

        dispatch(
          DataRequestAction(
            method,
            apiName,
            requestType,
            values,
            spinnerCaseName,
            ModalName,
            recordName
          )
        );
        form.resetFields();
      })
      .catch((info) => {
        console.log(info);
      });
  };
  
  const handleCancel = () => {
    
    form.resetFields([]);
    dispatch({ type: "Hide_Modal", ModalName: ModalName });
  };


  useEffect(() => {
    if(initialValues && visible && initialValues !== null){
      form.setFieldsValue(initialValues)
    }

    
  }, [visible]);

  if (success) {
    form.resetFields();
    handleCancel();
    message.success(textMessage);
    dispatch({ type: "ResetAll_State" });
  }
  if (error) {
    message.error(`${textMessage}`);
    dispatch({ type: "ResetAll_State" });
  }

  return (
    <Modal
      open={visible}
      width={width}
      onOk={handleOk}
      closable={false}
      onCancel={handleCancel}
      footer={[
        <>
          {showFooter && (
            <div className="d-flex align-items-center gap-3 justify-content-end px-3 pb-3">
              <Button
                onClick={() => handleCancel()}
                className="cancel-modal-button"
              >
                {cancelButtonName}
              </Button>
              <Button
                className="submit-modal-button"
                onClick={() => {
                  handleOk();
                }}
                loading={Spinner}
                disabled={Spinner}
              >
                {submitButtonName}
              </Button>
            </div>
          )}
        </>,
      ]}
    >
      <div className="px-3 pt-3">{modalTitle}</div>
      <hr style={{ border: "1px solid #545454" }} />
      <div className="px-3">
        <Form
          form={form}
          layout={layout}
          name={ModalName}
          initialValues={initialValues && initialValues}
        >
          {children}
        </Form>
      </div>
      <hr style={{ border: "1px solid #545454" }} />
    </Modal>
  );
};

export default FormModal;
