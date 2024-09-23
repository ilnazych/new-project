import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { MyHeader } from "./components/myHeader/MyHeader";
import { MenuList } from "./components/menuList/MenuList";
import { Main } from "./components/pages/main/Main";

const { Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <MyHeader />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <MenuList />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Main />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
