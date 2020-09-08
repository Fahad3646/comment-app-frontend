import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

class GuestRoute extends Component {
  constructor() {
    super();
  }

  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props;
    if(this.props.path === "/" && !isAuthenticated){
        return <Redirect to="/auth/login" />
    }
    return (
      <div>
        <Route
          {...rest}
          render={props =>
            !isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/dashboards" />
            )
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { token } = state.auth;

  return {
    isAuthenticated: !!token
  };
}

export default connect(mapStateToProps)(GuestRoute);
