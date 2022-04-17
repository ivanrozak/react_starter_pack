import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routeList } from "./routeList";

const RouteRenderer = () => {
  const getToken = localStorage.getItem("token");
  const isLoggedIn = getToken !== null ? true : false;
  const element = useRoutes(routeList(isLoggedIn));
  return <React.Fragment>{element}</React.Fragment>;
};

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <RouteRenderer />
    </BrowserRouter>
  );
}
