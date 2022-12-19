import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
import Filter from "./Filter";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  function logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"> </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/appliedjobs" icon={<PlusSquareOutlined />}>
            <Link to="/appliedjobs">Applied Jobs</Link>
          </Menu.Item>

          <Menu.Item key="/postjob" icon={<PlusOutlined />}>
            <Link to="/postjob">Post Job</Link>
          </Menu.Item>

          <Menu.Item key="/posted" icon={<CheckOutlined />}>
            <Link to="/posted">Posted</Link>
          </Menu.Item>

          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link onClick={logout}>Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background bs1"
          style={{
            padding: 0,
            position: "sticky",
            overflow: "auto",
            top: 0,
            zIndex: 9999,
          }}
        >
          <div className="flex justify-content-between">
            <div>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </div>
            <div>
              <Filter />
            </div>
            <div>
              <Text style={{ marginRight: "10px" }} code>
                {user.username}
              </Text>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
