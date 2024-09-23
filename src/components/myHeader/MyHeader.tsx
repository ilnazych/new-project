import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export function MyHeader() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
}
