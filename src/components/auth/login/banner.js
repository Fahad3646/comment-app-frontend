import React, { Component } from "react";
import { Col, Row } from "antd";

export default class Loginbanner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row
        className="login__banner"
        style={{
          backgroundImage: `url(/images/src/assets/media/bg-4.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "3rem 3.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          height: "100vh",
        }}
      >
        <Col span={24}>
          <div className="login__banner-logo">
            <img alt="logo" width="80%" />
          </div>
          <div
            className="login__banner-text"
            style={{
              fontSize: "1.5rem",
              marginTop: "calc(32vh)",
              flexGrow: 1,
            }}
          >
            Welcome to Comment App!
          </div>
          <div className="login__banner-footer">
            &copy; {new Date().getFullYear()} Comment
          </div>
        </Col>
      </Row>
    );
  }
}
