import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GuestRoute from "./routes/guest-route";
import AuthenticatedRoute from "./routes/authenticated-route";
import Login from "./containers/login/index";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Suspense fallback={() => <div>loading...</div>}>
          <Switch>
            <GuestRoute path="/" exact component={Login} />
            <GuestRoute path="/auth/login" exact component={Login} />
            <AuthenticatedRoute
              path="/dashboards"
              exact
              component={() => <div />}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
