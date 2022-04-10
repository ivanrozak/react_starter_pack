import React, { Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

import {
  HomeIcon,
  UserIcon,
  ReportIcon,
  SettingIcon,
  UserGroupIcon,
  InfoIcon,
  PicturesIcon,
  DiscountIcon,
  CardIcon,
  MenuIcon,
  SquareBlockIcon,
  NotesIcon,
} from "../components/atoms/Icons";

// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";

const CekTokoObat = React.lazy(() => import("../pages/Dashboard/CekTokoObat"));
const CustomerList = React.lazy(() =>
  import("../pages/Customers/CustomerList")
);
const CustomerVerification = React.lazy(() =>
  import("../pages/Customers/CustomerVerification")
);
const Dashboard = React.lazy(() => import("../pages/Dashboard/Distributor"));
const ListAdmin = React.lazy(() => import("../pages/Admin/ListAdmin"));
const Login = React.lazy(() => import("../pages/Auth/Login"));

export const routeList = [
  {
    path: "/",
    title: "Dashboard",
    element: <DashboardLayout />,
    icon: <HomeIcon />,
    children: [
      {
        index: true,
        title: "Dashboard Distributor",
        element: <Suspense fallback="loading...." children={<Dashboard />} />,
      },
      {
        path: "cektokoobat",
        title: "dashboard Cek Toko Obat",
        element: <Suspense fallback="loading...." children={<CekTokoObat />} />,
      },
    ],
  },
  {
    path: "/admin",
    title: "Admin",
    element: <DashboardLayout />,
    icon: <UserIcon />,
    children: [
      {
        index: true,
        title: "List Admin",
        element: <Suspense fallback="loading...." children={<ListAdmin />} />,
      },
    ],
  },
  {
    path: "/customers",
    title: "Pelanggan",
    element: <DashboardLayout />,
    icon: <UserGroupIcon />,
    children: [
      {
        index: true,
        title: "List Pelanggan",
        element: (
          <Suspense fallback="loading...." children={<CustomerList />} />
        ),
      },
      {
        path: "verification",
        title: "Verifikasi Pelanggan",
        element: (
          <Suspense
            fallback="loading...."
            children={<CustomerVerification />}
          />
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <Suspense fallback="loading...." children={<Login />} />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];
