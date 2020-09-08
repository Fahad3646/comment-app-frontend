import React, { Component } from "react";
import { Layout, Row, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import SideBar from "./SideBar";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";

const { Content, Sider } = Layout;

class SharedLayout extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = () => {
    const collapsed = this.state.collapsed;
    this.setState({ collapsed: !collapsed });
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    const data = this.props.auth.adminUser;
    return (
      <Layout style={{ height: "100%" }}>
        <Sider
          style={{ height: "auto" }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <SideBar
            name={data.name}
            role={data.role.name}
            collapsed={this.state.collapsed}
          />
          <Row
            style={{
              position: "relative",
              left: !this.state.collapsed ? 50 : 10,
              align: "center",
            }}
          >
            <Button ghost onClick={this.logout}>
              <LogoutOutlined />
              {!this.state.collapsed ? "Logout" : ""}
            </Button>
          </Row>
        </Sider>
        <Layout>
          <Content style={{ padding: "2rem 2rem", height: "100vh" }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(SharedLayout);
