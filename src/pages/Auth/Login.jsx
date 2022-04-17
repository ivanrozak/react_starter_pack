import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/hero-image.png";
import logo from "../../assets/icons/main-logo.png";
import FormInput from "../../components/molecules/FormInput";
import BButton from "../../components/atoms/BButton";
import { Form, Input } from "antd";

export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const { email, password } = values;
    if (email === "asd@asd.asd" && password === "asd") {
      localStorage.setItem("token", "asdasdasd");
      navigate("/");
    } else {
      console.log("asdasd");
    }
  };

  const validateMessages = {
    required: "${name} wajib diisi!",
    types: {
      email: "format ${name} tidak sesuai!",
    },
  };

  return (
    <>
      <div className="flex items-center justify-center h-full gap-x-24">
        <img src={heroImg} alt="" />
        <div className="card shadow-lg bg-white rounded-lg px-5 py-3 w-80">
          <img src={logo} alt="" className="h-10" />
          <h3 className="text-lg text-gray-700 font-semibold py-2">Masuk</h3>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <FormInput label="Email">
              <Form.Item
                // className="m-0"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Ketikan email" />
              </Form.Item>
            </FormInput>
            <FormInput label="Kata Sandi">
              <Form.Item
                // className="m-0"
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password placeholder="Ketikan kata sandi" />
              </Form.Item>
            </FormInput>

            <Form.Item shouldUpdate>
              {() => (
                <BButton
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  disabled={
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Masuk
                </BButton>
              )}
            </Form.Item>
          </Form>
          <p className="cursor-pointer text-primary mt-3">Lupa Kata Sandi?</p>
        </div>
      </div>
    </>
  );
}
