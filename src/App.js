// import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
// import SideBar from "./SideBar";

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
  return (
    <div>
      {/* <div className="App-header">
        <Clock />
      </div> */}

      <Layout />
      {/* <h1 onClick={() => setFirst2(!first2)}>{first2.toString()}</h1>
      <h1 onClick={() => setfirst(first + 2)}>{first}</h1> */}
    </div>
  );
}

export default App;
