import React, { useState } from "react";
import { Button, Table, Input } from "antd";

export default function Packaging() {
  const [section, setSection] = useState("default");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const test = () => {
    console.log("asd");
  };

  const FormSection = () => {
    return (
      <div>
        <h1>Add Data</h1>
        <div className="form-control">
          <div className="label">Ini Label ya</div>
          <Input placeholder="asdasd" />
        </div>
        <Button onClick={() => test()}>asdasd</Button>
      </div>
    );
  };

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>Manage Kemasan</h2>
            <Button type="primary" onClick={() => setSection("add")}>
              Tambah Data
            </Button>
          </div>
          <div className="body">
            <Table dataSource={data} columns={columns} pagination={false} />
          </div>
        </div>
      )}
      {section === "add" && <FormSection />}
      {section === "edit" && <FormSection />}
    </>
  );
}
