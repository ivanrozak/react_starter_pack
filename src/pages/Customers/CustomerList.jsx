import React, { useState, useEffect } from "react";
import CustomPagination from "../../components/atoms/CustomPagination";

export default function CustomerList() {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  function onPageChange(page, pageSize) {
    console.log(page, pageSize);
  }
  return (
    <>
      <div>CustomerList</div>
      <div>
        <CustomPagination
          onPageChange={onPageChange}
          onShowSizeChange={onShowSizeChange}
          total={50}
        />
      </div>
    </>
  );
}
