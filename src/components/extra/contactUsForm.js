import { Divider, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../actions/ui";
import Title from "antd/es/typography/Title";
import { MessageOutlined } from "@ant-design/icons";

const { useForm } = Form;

export const ContactUsForm = ({ form, isLoading, setLoading }) => {
  const onFinish = (data) => {
    // setLoading(true);
    setTimeout(() => {
      console.log(data);
      // form.resetFields();
      // setLoading(false);
    }, 3000);
  };
  return (
    <Form
      disabled={isLoading}
      form={form}
      onFinish={onFinish}
      layout="vertical"
      requiredMark="optional"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter valid name!" }]}
      >
        <Input placeholder="Please enter your name!" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter valid email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="someone@example.com" />
      </Form.Item>
      <Form.Item
        label="Mobile"
        name="mobile"
        rules={[
          {
            required: true,
            message: "Please enter valid mobile!",
            pattern: /^[0-9]{9,13}$/,
          },
        ]}
      >
        <Input placeholder="9876543210" />
      </Form.Item>
      <Form.Item label="Message" name="description">
        <Input.TextArea
          rows={4}
          style={{ resize: "none" }}
          placeholder="Provide message to understand your needs"
        />
      </Form.Item>
    </Form>
  );
};

export const ContactUsFormModal = () => {
  const open = useSelector((s) => s.ui.Contact);
  const dispatch = useDispatch();
  const [form] = useForm();

  const [isLoading, setLoading] = useState(false);

  return (
    <Modal
      destroyOnClose
      title={
        <>
          <Title level={5} className="m-0">
            How we can reach you?
          </Title>
          <Divider className="mt-4 mb-5" />
        </>
      }
      open={open}
      onCancel={() => {
        form.resetFields();
        dispatch(updateContact(false));
      }}
      onOk={() => form.submit()}
      okText="Send Message"
      okButtonProps={{ loading: isLoading, icon: <MessageOutlined /> }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <ContactUsForm
        form={form}
        isLoading={isLoading}
        setLoading={setLoading}
      />
    </Modal>
  );
};
