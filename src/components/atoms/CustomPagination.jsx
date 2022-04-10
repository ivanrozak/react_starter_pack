import React from "react";
import { Pagination } from "antd";

export default function CustomPagination(props) {
  const { total, onPageChange, onShowSizeChange } = props;

  return (
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      showTotal={(total, range) => (
        <div>
          Showing <strong>{range[0]}</strong> to <strong>{range[1]}</strong> of{" "}
          <strong>{total}</strong> results
        </div>
      )}
      onChange={onPageChange}
      pageSizeOptions={["10", "20", "30", "40", "50"]}
      defaultCurrent={1}
      total={total}
    />
  );
}
