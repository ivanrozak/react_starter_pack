import React from "react";

import { Button } from "antd";

function BButton(props) {
  const { shape } = props;
  return (
    <>
      <Button
        className={
          shape ? "" : "rounded-md h-full flex justify-center items-center px-3"
        }
        {...props}
      />
    </>
  );
}

export default BButton;
