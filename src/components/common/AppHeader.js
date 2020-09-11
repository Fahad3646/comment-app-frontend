import React from "react";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

class AppHeader extends React.Component {
  render() {
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item key="posts">Posts</Menu.Item>
          <Menu.Item key="About">About</Menu.Item>
        </Menu>
      </>
    );
  }
}

export default AppHeader;
