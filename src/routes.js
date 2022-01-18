import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Main} />
        <Route path={"/signin"} exact component={SignIn} />
        <Route path={"/signup"} exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default Routes;
