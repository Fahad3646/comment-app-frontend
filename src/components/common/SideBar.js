import React, { Component } from "react";
import { Menu, Typography, Avatar } from "antd";
import {
  ProfileOutlined,
  UserOutlined,
  TagOutlined,
  SoundOutlined,
  ShopOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { miventureLogo, miventureIcon } from "../../assets/media";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const { SubMenu } = Menu;
const { Title } = Typography;

class SideBar extends Component {
  state = {
    openKeys: ["sub1"],
    selectedKeys: [],
  };

  rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7"];

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      const { pathname } = this.props.location;
      const { params } = this.props.match;
      if (pathname.includes("users/") && params.userId) {
        this.setState({
          selectedKeys: ["sub1", "2"],
          openKeys: ["sub1"],
        });
      }
      if (pathname.includes("issuer/") && params.issuerId) {
        this.setState({
          selectedKeys: ["sub2", "4"],
          openKeys: ["sub2"],
        });
      }
      if (pathname.includes("campaign/") && params.campaignId) {
        this.setState({
          selectedKeys: ["sub3", "6"],
          openKeys: ["sub3"],
        });
      }
    }
  }

  onSelectChange = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    this.setState({
      selectedKeys: [key],
    });
  };

  render() {
    const { collapsed, role, name } = this.props;
    return (
      <>
        <div className="logo" style={{ margin: "1rem 1rem 2rem 1rem" }}>
          <Link to="/dashboards">
            <img
              style={{
                marginLeft: collapsed ? "10px" : "",
              }}
              alt="logo"
              src={collapsed ? miventureIcon : miventureLogo}
              width={collapsed ? "70%" : "100%"}
              height={collapsed ? "70%" : "100%"}
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            icon={<UserOutlined />}
            style={{
              backgroundColor: "rgb(1, 21, 40)",
              border: "1px solid #FFF",
            }}
          />
          <span style={{ color: "#fff", marginLeft: "0.5rem" }}>{name}</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectedKeys}
          onOpenChange={this.onOpenChange}
          style={{ marginTop: "1rem" }}
          onSelect={this.onSelectChange}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>Users</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/users/create">Create User</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/users/list">Existing Users</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <ShopOutlined />
                <span>Businesses</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to="/issuers/create">Create Business</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/issuers/list">Existing Businesses</Link>
            </Menu.Item>
            <Menu.Item key="capitalRequest">
              <Link to="/capitalRequest/list">Capital Requests</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <SoundOutlined />
                <span>Campaigns</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/campaigns/create">Create Campaign</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/campaigns/list">Existing Campaigns</Link>
            </Menu.Item>
          </SubMenu>
          {role === "Super Admin" && (
            <SubMenu
              key="sub5"
              title={
                <span>
                  <TagOutlined />
                  <span>Admin Users</span>
                </span>
              }
            >
              <Menu.Item key="adminUser">
                <Link to="/adminUser/create">Create Admin User</Link>
              </Menu.Item>
              <Menu.Item key="adminUserList">
                <Link to="/adminUsers/list">Admin Users List</Link>
              </Menu.Item>
              <SubMenu
                key="role"
                title={
                  <span>
                    <TagOutlined />
                    <span>Admin Roles</span>
                  </span>
                }
              >
                <Menu.Item key="adminRole">
                  <Link to="/adminRole/create">Create Admin Role</Link>
                </Menu.Item>
                <Menu.Item key="adminRoleList">
                  <Link to="/adminRoles/list">Admin Roles List</Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          )}
          <SubMenu
            key="sub7"
            title={
              <span>
                <FileDoneOutlined />
                <span>Others</span>
              </span>
            }
          >
            <SubMenu
              key="sub"
              title={
                <span>
                  <TagOutlined />
                  <span>Tags</span>
                </span>
              }
            >
              <Menu.Item key="8">
                <Link to="/tags/create">Create Tag</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/tags/list">Tags List</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="su"
              title={
                <span>
                  <ProfileOutlined />
                  <span>NAIC</span>
                </span>
              }
            >
              <Menu.Item key="naicForm">
                <Link to="/naic/create">Create NAIC</Link>
              </Menu.Item>
              <Menu.Item key="naicList">
                <Link to="/naics/list">NAIC List</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="7">
              <Link to="/appPopup/list">App Popup List</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}

export default withRouter(SideBar);
