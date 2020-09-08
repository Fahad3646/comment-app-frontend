import React, { Component } from "react";
import LoginForm from "../../components/auth/login/form";
import { LoginBanner } from "../../components/auth/login/";
import { Row, Col } from "antd";
import { login } from "../../redux/actions/auth";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      login,
      auth: { isLoading }
    } = this.props;

    return (
      <Row>
        <Col xs={24} lg={10} md={6}>
          <LoginBanner />
        </Col>
        <Col xs={24} lg={14} md={18}>
          <LoginForm onSubmit={login} loading={isLoading} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
