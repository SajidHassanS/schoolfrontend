import { Form, Input, message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import FormModal from "../../../components/Modal/SingleInfoFormModal";
import TaxRatesForm from "./TaxRatesForm";

const EditTaxRates = () => {
  const [form] = Form.useForm();
  const TaxRateProps = useSelector((state) => state.crudR);
  const { Edit_TaxRates_Modal, initialValues, buttonSpin } = TaxRateProps;

  return (
    <FormModal
      ModalName="Edit_TaxRates_Modal"
      visible={Edit_TaxRates_Modal}
      modalTitle="Edit TaxRates"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateTaxRate"
      requestType="EditTaxRateRecord"
      recordName="taxRates"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      extraFieldValue={initialValues && initialValues._id}
      initialValues={initialValues}
    >
      <TaxRatesForm formType="edit" />
    </FormModal>
  );
};

export default EditTaxRates;
