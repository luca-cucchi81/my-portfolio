import React from "react";
import { Form, Input, Button } from "antd";

/* stylesheet */
import "./mailform.css";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
    },
};

function MailForm() {
    return (
        <div className="mail-form">
            <Form
                {...layout}
                name="Contact Me"
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    wrapperCol={{ ...layout.labelCol, span: 10 }}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    wrapperCol={{ ...layout.labelCol, span: 10 }}
                    rules={[
                        {
                            type: "email",
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={["user", "message"]} label="Message">
                    <Input.TextArea
                        allowClear={true}
                        autoSize={{
                            minRows: 5,
                            maxRows: 10,
                        }}
                        maxLength={550}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{ background: "#16c79a", border: "none" }}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default MailForm;
