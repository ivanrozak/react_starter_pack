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

import PageLoading from "../components/organism/PageLoading";
import Page404 from "../components/organism/Page404";

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

// Product Management Page
const ProductClass = React.lazy(() =>
  import("../pages/ProductManagement/ProductClass")
);
const Classification = React.lazy(() =>
  import("../pages/ProductManagement/Classification")
);
const MedicineType = React.lazy(() =>
  import("../pages/ProductManagement/MedicineType")
);
const NIE = React.lazy(() => import("../pages/ProductManagement/NIE"));
const Packaging = React.lazy(() =>
  import("../pages/ProductManagement/Packaging")
);
const Principal = React.lazy(() =>
  import("../pages/ProductManagement/Principal")
);
const ProductList = React.lazy(() =>
  import("../pages/ProductManagement/ProductList")
);
const SubClassification = React.lazy(() =>
  import("../pages/ProductManagement/SubClassification")
);
const Therapeutic = React.lazy(() =>
  import("../pages/ProductManagement/Therapeutic")
);
const Unit = React.lazy(() => import("../pages/ProductManagement/Unit"));
const ProductVerification = React.lazy(() =>
  import("../pages/ProductManagement/ProductVerification")
);

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
        key: "/",
        element: (
          <Suspense fallback={<PageLoading />} children={<Dashboard />} />
        ),
      },
      {
        path: "cektokoobat",
        key: "/cektokoobat",
        title: "dashboard Cek Toko Obat",
        element: (
          <Suspense fallback={<PageLoading />} children={<CekTokoObat />} />
        ),
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
        key: "/admin",
        title: "List Admin",
        element: (
          <Suspense fallback={<PageLoading />} children={<ListAdmin />} />
        ),
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
        key: "/customers",
        title: "List Pelanggan",
        element: (
          <Suspense fallback={<PageLoading />} children={<CustomerList />} />
        ),
      },
      {
        path: "verification",
        key: "/customers/verification",
        title: "Verifikasi Pelanggan",
        element: (
          <Suspense
            fallback={<PageLoading />}
            children={<CustomerVerification />}
          />
        ),
      },
    ],
  },
  {
    path: "/products",
    title: "Produk Management",
    element: <DashboardLayout />,
    icon: <MenuIcon />,
    children: [
      {
        path: "verification",
        key: "/products/verification",
        title: "Verifikasi Produk",
        element: (
          <Suspense
            fallback={<PageLoading />}
            children={<ProductVerification />}
          />
        ),
      },
      {
        index: true,
        key: "/products",
        title: "List Produk",
        element: (
          <Suspense fallback={<PageLoading />} children={<ProductList />} />
        ),
      },
      {
        path: "principal",
        key: "/products/principal",
        title: "Manage Principal",
        element: (
          <Suspense fallback={<PageLoading />} children={<Principal />} />
        ),
      },
      {
        path: "packaging",
        key: "/products/packaging",
        title: "Manage Kemasan",
        element: (
          <Suspense fallback={<PageLoading />} children={<Packaging />} />
        ),
      },
      {
        path: "unit",
        key: "/products/unit",
        title: "Manage Unit",
        element: <Suspense fallback={<PageLoading />} children={<Unit />} />,
      },
      {
        path: "medicinetype",
        key: "/products/medicinetype",
        title: "Manage Golongan Obat",
        element: (
          <Suspense fallback={<PageLoading />} children={<MedicineType />} />
        ),
      },
      {
        path: "class",
        key: "/products/class",
        title: "Manage Kelas",
        element: (
          <Suspense fallback={<PageLoading />} children={<ProductClass />} />
        ),
      },
      {
        path: "therapeutic",
        key: "/products/therapeutic",
        title: "Manage Therapeutic",
        element: (
          <Suspense fallback={<PageLoading />} children={<Therapeutic />} />
        ),
      },
      {
        path: "classification",
        key: "/products/classification",
        title: "Manage Klasifikasi",
        element: (
          <Suspense fallback={<PageLoading />} children={<Classification />} />
        ),
      },
      {
        path: "subclassification",
        key: "/products/subclassification",
        title: "Manage Sub-Klasifikasi",
        element: (
          <Suspense
            fallback={<PageLoading />}
            children={<SubClassification />}
          />
        ),
      },
      {
        path: "nie",
        key: "/products/nie",
        title: "List NIE Expired",
        element: <Suspense fallback={<PageLoading />} children={<NIE />} />,
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
        element: <Suspense fallback={<PageLoading />} children={<Login />} />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
