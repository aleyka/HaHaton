import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Checkbox, Tabs, Breadcrumb, Layout, Menu, theme } from "antd";
import CalendarComp from "../../Components/Calendar";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const onChange = (key) => {
  console.log(key);
};

const ListContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}
          className="header"
        >
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Checkbox style={{
                display: "flex",
                justifyContent: "center",
                padding: 20
            }} onChange={onChange}>Select All</Checkbox>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100vh",

                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
              <CalendarComp />
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Tabs
                onChange={onChange}
                type="card"
                items={new Array(3).fill(null).map((_, i) => {
                  const id = String(i + 1);
                  return {
                    label: `Tab ${id}`,
                    key: id,
                    children: `Content of Tab Pane ${id}`,
                  };
                })}
              />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export { ListContent };
