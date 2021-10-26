import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Page1 from "./components/pages/page1";
import Page2 from "./components/pages/page2";
import Page3 from "./components/pages/page3";
import Page4 from "./components/pages/page4";
import Page5 from "./components/pages/page5";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/Page1" component={Page1} />
          <Route path="/Page2" component={Page2} />
          <Route path="/Page3" component={Page3} />
          <Route path="/Page4" component={Page4} />
          <Route path="/Page5" component={Page5} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
