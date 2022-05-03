import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="#intro"></Route>
        <Route path="#about"></Route>
        <Route path="#services"></Route>
      </Switch>
    </Router>
  );
};
