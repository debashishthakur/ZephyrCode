import { Col, Form, Input, Row, Button, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.confirmpassword) {
      message.error("Passwords not matched");
    } else {
      console.log(values);
      dispatch(registerUser(values));
    }
  }
  return (
    <div className="login">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Register</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Button className="mb-3" type="primary" htmlType="submit">
              Register
            </Button>
            <br />
            <Link to="/login">Already a user? Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
