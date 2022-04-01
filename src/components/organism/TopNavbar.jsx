import React from "react";
import { Layout } from "antd";
import logo from "../../assets/icons/main-logo.png";
import { BellFilled, DownOutlined, UserOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const { Header } = Layout;

export default function TopNavbar() {
  return (
    <>
      <Header className="bg-white flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="" className="h-10" />
        </div>
        <div className="flex items-center">
          <BellFilled />
          <Divider type="vertical" />
          <div className="flex items-center">
            <UserOutlined />
            <div className="ml-3">
              <div className="leading-none">Hi, John Doe</div>
              <div className="leading-none">Super Admin</div>
            </div>
          </div>
          <Divider type="vertical" />
          <DownOutlined />
        </div>
      </Header>
    </>
  );
}
