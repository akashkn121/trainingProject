import About from "./Components/About";
import Contact from "./Components/Contact";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Layout from "./Components/Layout";
import ProfileDetails from "./Components/ProfileDetails";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [userUsing, setUserUsing] = useState({});
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn userDetails={userDetails} setUserUsing={setUserUsing} />
          </Route>
          <Route path="/signUp">
            <SignUp setUserDetails={setUserDetails} userDetails={userDetails} />
          </Route>
          <Route path="/home" component={Layout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profileDetails">
            <ProfileDetails userUsing={userUsing} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
