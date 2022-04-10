import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import logo from "../../assets/icons/main-logo.png";

const { Content, Header } = Layout;

export default function AuthLayout() {
  return (
    <>
      <Layout className="h-screen">
        <Header className="bg-white flex justify-between items-center">
          <div className="cursor-pointer">
            <img src={logo} alt="" className="h-10" />
          </div>
        </Header>
        <Layout>
          <Content className="bg-custom overflow-y-auto">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
