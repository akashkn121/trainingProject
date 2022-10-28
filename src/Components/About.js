import React, { useState } from "react";
import axios from "axios";

const aboutCss = {
  content: {
    height: "100%",
    width: "100%",
  },
};

const About = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((item) => setData(item.data));
  };
  return (
    <div style={aboutCss.content}>
      {!data && <button onClick={() => getData()}>Click For Data</button>}
      {data && <button onClick={() => setData(null)}>Close</button>}

      <div style={{ overflow: "scroll", height: "95vh" }}>
        {data &&
          data.map((item) => (
            <ul>
              *********************
              <li>{item.userId}</li>
              <li>{item.id}</li>
              <li>{item.title}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};
export default About;
