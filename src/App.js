import About from "./Components/About";
import Contact from "./Components/Contact";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { createContext, useState } from "react";
import Layout from "./Components/Layout";
import ProfileDetails from "./Components/ProfileDetails";

export const myContext = createContext();

function App() {
  const [userUsing, setUserUsing] = useState({});

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn setUserUsing={setUserUsing} />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/home" component={Layout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profileDetails">
            <ProfileDetails userUsing={userUsing} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
