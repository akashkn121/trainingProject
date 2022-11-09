import About from "./Components/About";
import Contact from "./Components/Contact";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
// import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            <Layout />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
