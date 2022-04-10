import React, { useState, useEffect } from "react";
import { Table } from "antd";
import CustomPagination from "../../components/atoms/CustomPagination";
import { getDistributors } from "../../services/api";

export default function CustomerList() {
  const [loading, setLoading] = useState(false);
  const [distributors, setDistributors] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    setLoading(true);
    getDistributors()
      .then((res) => {
        console.log(res.data);
        setDistributors(res.data.data);
        setTotalData(res.data.total_data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => [setLoading(false)]);
  }, []);

  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  function onPageChange(page, pageSize) {
    console.log(page, pageSize);
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <>
      <div>CustomerList</div>
      <Table
        columns={columns}
        loading={loading}
        dataSource={distributors}
        rowKey="key"
      />
      <div>
        <CustomPagination
          onPageChange={onPageChange}
          onShowSizeChange={onShowSizeChange}
          total={totalData}
        />
      </div>
    </>
  );
}
