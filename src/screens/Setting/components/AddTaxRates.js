import { Form, Input, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import TaxRatesForm from "./TaxRatesForm";

const AddTaxRates = () => {
  const [form] = Form.useForm();
  const addTaxRatesProps = useSelector((state) => state.crudR);
  const { Add_Tax_Rates_Modal, initialValues, buttonSpin } = addTaxRatesProps;
  return (
    <FormModal
      ModalName="Add_Tax_Rates_Modal"
      visible={Add_Tax_Rates_Modal}
      modalTitle="Add Tax Rates"
      Spinner={buttonSpin}
      method="POST"
      apiName="addTaxRate"
      requestType="AddUserRecord"
      recordName="taxRates"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues && initialValues}
    >
      <TaxRatesForm />
    </FormModal>
  );
};

export default AddTaxRates;
