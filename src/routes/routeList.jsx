import React, { Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

const Dashboard = React.lazy(() => import("../pages/Dashboard/Distributor"));
const CekTokoObat = React.lazy(() => import("../pages/Dashboard/CekTokoObat"));
const ListAdmin = React.lazy(() => import("../pages/Admin/ListAdmin"));
const CustomerList = React.lazy(() =>
  import("../pages/Customers/CustomerList")
);
const CustomerVerification = React.lazy(() =>
  import("../pages/Customers/CustomerVerification")
);
const Login = React.lazy(() => import("../pages/Auth/Login"));

export const routeList = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback="loading...." children={<Dashboard />} />,
      },
      {
        path: "cektokoobat",
        element: <Suspense fallback="loading...." children={<CekTokoObat />} />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback="loading...." children={<ListAdmin />} />,
      },
    ],
  },
  {
    path: "/customers",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading...." children={<CustomerList />} />
        ),
      },
      {
        path: "verification",
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
        element: <Suspense fallback="loading...." children={<Login />} />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];
