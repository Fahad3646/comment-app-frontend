import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/common/SharedLayout";

class AuthenticatedRoute extends Component {
  constructor() {
    super();
  }

  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Layout style={{ height: "100vh" }}>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      />
    );
  }
}

function mapStateToProps(state) {
  const { token } = state.auth;

  return {
    isAuthenticated: !!token
  };
}

export default connect(mapStateToProps)(AuthenticatedRoute);
