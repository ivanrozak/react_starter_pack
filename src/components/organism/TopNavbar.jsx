import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Dropdown,
  Badge,
  Divider,
  Modal,
  notification,
} from "antd";
import logo from "../../assets/icons/main-logo.png";
import { BellFilled, DownOutlined, UserOutlined } from "@ant-design/icons";
import { LockIcon, LogoutIcon } from "../atoms/Icons";

const { Header } = Layout;

export default function TopNavbar() {
  const navigate = useNavigate();

  const dropdownMenu = (
    <Menu className="divide-y-2">
      <Menu.Item key="0">
        <div className="flex items-center">
          <div className="flex w-6 text-gray-600">
            <LockIcon className="text-gray-600" />
          </div>
          Ubah Kata Sandi
        </div>
      </Menu.Item>
      <Menu.Item key="1">
        <div
          onClick={() => confirmLogout()}
          className="flex items-center text-danger"
        >
          <div className="flex w-6">
            <LogoutIcon className="text-danger" />
          </div>
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
    notification.success({
      message: "Keluar",
      description: "Kamu berhasil keluar dari dashboard",
    });
  };

  const confirmLogout = () => {
    Modal.confirm({
      title: "Keluar",
      content: "Apakah anda yakin ingin keluar?",
      okText: "Ya, Keluar",
      cancelText: "Batalkan",
      onOk: () => Logout(),
    });
  };

  return (
    <>
      <Header className="bg-white flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="" className="h-10" />
        </div>
        <div className="flex items-center">
          <Badge size="small" count={5}>
            <BellFilled style={{ fontSize: "18px", color: "#6B7280" }} />
          </Badge>
          <Divider
            type="vertical"
            style={{ height: "2em" }}
            className="mx-4 border-gray-300"
          />
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
          <Divider
            type="vertical"
            style={{ height: "2em" }}
            className="mx-4 border-gray-300"
          />
          <Dropdown overlay={dropdownMenu} placement="bottomRight">
            <DownOutlined
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: "16px", color: "#6B7280", fontWeight: "bold" }}
            />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
