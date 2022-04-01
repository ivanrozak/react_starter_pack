import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routeList } from "./routeList";

const RouteRenderer = () => {
  const element = useRoutes(routeList);
  return <React.Fragment>{element}</React.Fragment>;
};

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <RouteRenderer />
    </BrowserRouter>
  );
}
