import React from "react";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
const UserInfo = ({ logout, authUser }) => {
  const menu = (
    <Menu>
      {/* <Menu.Item onClick="">
        <span>Reset Password</span>
      </Menu.Item> */}
      <Menu.Item onClick={() => logout()}>
        <span className="pointer">Logout</span>
      </Menu.Item>
    </Menu>
  );

  const getName = () => {
    let name = "";
    name = authUser.fullName;
    return name;
  };
  const styles = {
    profileimg: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      marginRight: "3px",
    },
  };
  const renderImage = () => {
    if (authUser.profileImageUrl) {
      return (
        <img src={authUser.profileImageUrl} alt="" style={styles.profileimg} />
      );
    } else {
      return <img src="" alt="" style={styles.profileimg} />;
    }
  };

  return (
    <div className="d-flex align-items-center">
      <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
        <span
          className="ant-dropdown-link pointer"
          style={{
            textTransform: "capitalize",
            cursor: "pointer",
          }}
          onClick={(e) => e.preventDefault()}
        >
          {renderImage()}
          {getName()} <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
};

export default UserInfo;
