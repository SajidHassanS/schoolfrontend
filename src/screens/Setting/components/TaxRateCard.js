import React, { useEffect } from "react";
import { Card,Row,Col,Input, } from "antd";
import { FaEdit } from "react-icons/fa";
import ShowModal from "../../../components/Modal/ShowModal";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import TitleHead from "../../../components/Title";
const TaxRateCard = () => {
  const dispatch = useDispatch();
  const settingsProps = useSelector((state) => state.crudR);
  const { taxRates } = settingsProps;
  const fetchSettings = () => {
    dispatch(
      DataGetAction(
        "getTaxRate",
        "FetchTaxRateRecord",
        { query: "all" },
        "",
        "",
        "taxRates"
      )
    );
  };
  useEffect(fetchSettings, []);
  return (
    <Card
      bodyStyle={{
        border: "1px solid #E8E8E8",
        borderRadius: "4px",
      }}
    >
      {/*card Header */}
      <div className="w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center" style={{ gap: "25px" }}>
          <TitleHead title="Tax Rates" />
        </div>
        {taxRates && taxRates.taxDetails.length > 0 ? (
          <ShowModal
            ModalName="Edit_TaxRates_Modal"
            buttonName={
              <FaEdit
                className="settingModalicon"
                size={25}
                style={{ color: "#50B8E7" }}
              />
            }
            record={taxRates}
          />
        ) : (
          <ShowModal
            ModalName="Add_Tax_Rates_Modal"
            buttonName="New"
            showButton={true}
          />
        )}
      </div>
      {/* card Body */}
      <div className="mt-3">
        <Row className="pb-2 w-100">
          <Col xl={8} lg={8} md={8} sm={8} xs={8} className="pe-2">
            <span
              className="font-sans-regular"
              style={{ color: "#545454", fontSize: "14px" }}
            >
              Minimum
            </span>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8} className="pe-2">
            <span
              className="font-sans-regular "
              style={{ color: "#545454", fontSize: "14px" }}
            >
              Maximum
            </span>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} xs={8} className="pe-2">
            <span
              className="font-sans-regular"
              style={{ color: "#545454", fontSize: "14px" }}
            >
              Rate
            </span>
          </Col>
        </Row>
        {taxRates &&  taxRates.taxDetails &&
          taxRates.taxDetails.map((item, index) => (
            <Row key={index} className="pb-2 w-100">
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className="pe-2 d-flex align-items-center gap-2"
              >
                <Input suffix="$" value={item.minimumAmount} readOnly />
                <span>-</span>
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className="pe-2 d-flex align-items-center gap-2"
              >
                <Input suffix="$" value={item.maximumAmount} readOnly />
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className="pe-2 d-flex align-items-center gap-2"
              >
                <Input suffix="%" value={item.taxRate} readOnly />
              </Col>
            </Row>
          ))}
      </div>
    </Card>
  );
};

export default TaxRateCard;
