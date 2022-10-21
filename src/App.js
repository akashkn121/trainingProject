import About from "./Components/About";
import Contact from "./Components/Contact";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Layout from "./Components/Layout";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn userDetails={userDetails} setUserDetails={setUserDetails} />
          </Route>
          <Route path="/signUp">
            <SignUp setUserDetails={setUserDetails} userDetails={userDetails} />
          </Route>
          <Route path="/home" component={Layout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
