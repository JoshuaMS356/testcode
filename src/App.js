import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index.js";
import ContactUs from "./pages/ContactUsPage.js";

export function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={ContactUs} exact />
        </Switch>
      </Router>
    </>
  );
}
