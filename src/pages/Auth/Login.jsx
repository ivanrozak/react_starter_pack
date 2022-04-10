import React from "react";
import heroImg from "../../assets/images/hero-image.png";
import logo from "../../assets/icons/main-logo.png";
// import { Form, Input, Button } from "antd";

export default function Login() {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  // const validateMessages = {
  //   required: "${label} is required!",
  //   types: {
  //     email: "${label} is not a valid email!",
  //     number: "${label} is not a valid number!",
  //   },
  //   number: {
  //     range: "${label} must be between ${min} and ${max}",
  //   },
  // };

  return (
    <>
      <div className="flex items-center justify-center h-full gap-x-24">
        <img src={heroImg} alt="" />
        <div className="card shadow-lg bg-white rounded-lg px-5 py-3 w-80">
          <img src={logo} alt="" />
          <h3 className="text-lg font-semibold">Masuk</h3>
          {/* <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            validateMessages={validateMessages}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Kata Sandi"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-primary"
              >
                Masuk
              </Button>
            </Form.Item>
          </Form> */}
          <p className="cursor-pointer text-primary">Lupa Kata Sandi?</p>
        </div>
      </div>
    </>
  );
}
