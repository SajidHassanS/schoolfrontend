import React, { useEffect } from "react";
import { Image, Card, Typography } from "antd";
import { FaEdit } from "react-icons/fa";
import ShowModal from "../../../components/Modal/ShowModal";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
const { Title } = Typography;
const ProfileCard = () => {
  const dispatch = useDispatch();
  const settingsProps = useSelector((state) => state.crudR);
  const { settingsData } = settingsProps;
  const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  const styles = {
    img: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
    },
  };
  const fetchSettings = () => {
    dispatch(
      DataGetAction(
        "getProfile",
        "FetchProfileDetails",
        "",
        "",
        "",
        "settingsData"
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
      {/* profile card header */}
      <div className="w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center" style={{ gap: "25px" }}>
          <Image
            style={styles.img}
            src={settingsData && settingsData.profileImageUrl}
          />

          <div className="d-flex flex-column " style={{ gap: "3px" }}>
            <p>
              <Title
                style={{ color: "#003366", fontSize: "24px" }}
                level={5}
                className="mb-0  font-sans-bold"
              >
                <span style={{ textTransform: "capitalize" }}>
                  {settingsData && settingsData.fullName
                    ? settingsData.fullName
                    : "Name"}
                </span>
              </Title>
            </p>
            {/* reset modal  */}
            <ShowModal
              ModalName="Reset_Setting_Password_Modal"
              buttonName={
                <span className="settingModalText">Change Password</span>
              }
            />
          </div>
        </div>
        {/* edit setting modal */}
        <ShowModal
          ModalName="Edit_Setting_Modal"
          buttonName={
            <FaEdit
              className="settingModalicon"
              size={25}
              style={{ color: "#50B8E7" }}
            />
          }
          record={settingsData}
        />
      </div>

      <div className="d-flex flex-column mt-3" style={{ gap: "8px" }}>
        <span
          className=" font-sans-bold "
          style={{ color: "#003366", fontSize: "16px" }}
        >
          Full Name
        </span>

        <p
          style={{
            border: "1px solid #545454",
            borderRadius: "4px",
            padding: "8px",
            textTransform: "capitalize",
          }}
        >
          {(settingsData && settingsData.fullName) || "Name"}
        </p>
      </div>

      <div className="d-flex flex-column mt-3" style={{ gap: "8px" }}>
        <span
          className=" font-sans-bold "
          style={{ color: "#003366", fontSize: "16px" }}
        >
          Email
        </span>

        <p
          style={{
            border: "1px solid #545454",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          {(settingsData && settingsData.email) || "www@yahoo.com"}
        </p>
      </div>

      <div className="d-flex flex-column mt-3" style={{ gap: "8px" }}>
        <span
          className=" font-sans-bold "
          style={{ color: "#003366", fontSize: "16px" }}
        >
          Phone Number
        </span>

        <p
          style={{
            border: "1px solid #545454",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          +
          {settingsData &&
            settingsData.phoneNumber &&
            settingsData.phoneNumber.replace(phoneRegex, "$1 $2 $3")}
        </p>
      </div>
      {/* profile card body */}
    </Card>
  );
};

export default ProfileCard;
