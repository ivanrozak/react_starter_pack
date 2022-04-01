import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import SideNavbar from "../../components/organism/SideNavbar";
import TopNavbar from "../../components/organism/TopNavbar";

const { Content } = Layout;

export default function DashboardLayout() {
  return (
    <>
      <Layout>
        <TopNavbar />
        <Layout>
          <SideNavbar />
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
