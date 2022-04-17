import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import logo from "../../assets/icons/main-logo.png";
import { BellFilled, DownOutlined, UserOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const { Header } = Layout;

export default function TopNavbar() {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div onClick={() => Logout()}>Logout</div>
      </Menu.Item>
    </Menu>
  );

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <>
      <Header className="bg-white flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="" className="h-10" />
        </div>
        <div className="flex items-center">
          <BellFilled style={{ fontSize: "18px", color: "gray" }} />
          <Divider type="vertical" style={{ height: "2em" }} className="mx-4" />
          <div className="flex items-center">
            <UserOutlined
              style={{ fontSize: "16px", color: "gray" }}
              className="border rounded-full border-1 p-1"
            />
            <div className="ml-3">
              <div className="leading-none text-md font-semibold text-gray-600">
                Hi, John Doe
              </div>
              <div className="leading-none mt-1 text-sm text-gray-700">
                Super Admin
              </div>
            </div>
          </div>
          <Divider type="vertical" style={{ height: "2em" }} className="mx-4" />
          <Dropdown overlay={menu} placement="bottomRight">
            <DownOutlined
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: "16px", color: "gray", fontWeight: "bold" }}
            />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
