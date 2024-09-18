"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Form, Input, Button, Select, Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;
const { Option } = Select;

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ role: "user" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (values) => {
    setErrorMessage("");
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ formData: values }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  const callbackUrl = encodeURIComponent("/clientMember");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {" "}
      {/* Centering the form */}
      <Form onFinish={handleSubmit} className="flex flex-col gap-3 w-1/2">
        <Title level={2}>sign Up</Title>
        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Full Name</span>}
          name="name"
          rules={[{ required: true }]}
        >
          {" "}
          {/* Increased font weight */}
          <Input onChange={(e) => handleChange("name", e.target.value)} />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Email</span>}
          name="email"
          rules={[{ required: true }]}
        >
          {" "}
          {/* Increased font weight */}
          <Input onChange={(e) => handleChange("email", e.target.value)} />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Password</span>}
          name="password"
          rules={[{ required: true }]}
        >
          {" "}
          {/* Increased font weight */}
          <Input.Password
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Role</span>}
          name="role"
          rules={[{ required: true }]}
        >
          {" "}
          {/* Increased font weight */}
          <Select
            defaultValue="user"
            onChange={(value) => handleChange("role", value)}
          >
            <Option value="user">Creator</Option>
            <Option value="company">Company</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div>
        Already have an account?
        <Link href={`/api/auth/signin?callbackUrl=${callbackUrl}`}>Login</Link>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default UserForm;
