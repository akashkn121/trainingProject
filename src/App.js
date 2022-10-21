// import { useState } from "react";
// import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import LogIn from "./Components/LogIn";
// import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

// function Clock() {
//   const [date, setdate] = useState(new Date());
//   setInterval(() => {
//     setdate(new Date());
//   }, 1000);
//   return (
//     <div>
//       <h2>{date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

function App() {
  const [userDetails, setUserDetails] = useState([]);
  return (
    <div>
      {/* <div className="App-header">
        <Clock />
      </div> */}
      {/* <LogIn userDetails={userDetails} setUserDetails={setUserDetails} /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn userDetails={userDetails} setUserDetails={setUserDetails} />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
