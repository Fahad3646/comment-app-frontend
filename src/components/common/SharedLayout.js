import React, { Component } from "react";
import { Layout, Row, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import AppHeader from "./AppHeader";
import { logout } from "../../redux/actions/Auth";
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
    const data = this.props.auth;
    return (
      <Layout style={{ height: "100%" }}>
        <Row
          style={{
            position: "relative",
            left: !this.state.collapsed ? 50 : 10,
            align: "center",
          }}
        >
          <AppHeader />
          <Button ghost onClick={this.logout}>
            <LogoutOutlined />
            {!this.state.collapsed ? "Logout" : ""}
          </Button>
        </Row>
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
