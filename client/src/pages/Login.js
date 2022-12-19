import { Col, Form, Input, Row, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginUser(values));
  }
  return (
    <div className="login">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
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

            <Button className="mb-3" type="primary" htmlType="submit">
              Login
            </Button>
            <br />
            <Link to="/register">Not registered? Click here to register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
