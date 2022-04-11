import React from "react";
import { Spin } from "antd";

export default function () {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin tip="Loading..." />
    </div>
  );
}
