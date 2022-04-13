import React, { useState } from "react";
import { Table, Input, Switch, Upload, message } from "antd";
import BButton from "../../components/atoms/BButton";
import FormInput from "../../components/molecules/FormInput";
import {
  PlusOutlined,
  ArrowLeftOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

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

  const FormSection = () => {
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <>
        <div className="content-section">
          <div className="header">
            <div className="flex items-center">
              <BButton
                className="p-2 h-full mr-3"
                type="primary"
                icon={<ArrowLeftOutlined />}
                onClick={() => setSection("default")}
              />
              <div className="text-lg font-medium text-gray-600">
                Menambahkan Kemasan
              </div>
            </div>
          </div>
          <div className="body-with-footer">
            <div className="body-content grid grid-cols-2 gap-x-4">
              <FormInput label="Nama Kemasan" required>
                <Input placeholder="Ketikan Nama Kemasan" />
              </FormInput>
              <FormInput label="Status" required>
                <Switch defaultChecked />
              </FormInput>
              <FormInput label="Status" required>
                <TextArea
                  rows={4}
                  placeholder="Ketikan deskripsi"
                  maxLength={6}
                />
              </FormInput>
              <FormInput label="Upload Gambar" required>
                <Upload {...props}>
                  <BButton icon={<UploadOutlined />}>Click to Upload</BButton>
                </Upload>
              </FormInput>
            </div>
            <div className="footer">
              <BButton>Batalkan</BButton>
              <BButton type="primary">Simpan</BButton>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>Manage Kemasan</h2>
            <BButton
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setSection("add")}
            >
              Tambah Data
            </BButton>
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
