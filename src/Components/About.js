import React, { useState } from "react";
import Axios from "axios";

const aboutCss = {
  content: {
    height: "100%",
    width: "100%",
  },
};

const About = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then((item) =>
      setData(item.data)
    );
  };
  return (
    <div style={aboutCss.content}>
      <button onClick={() => getData()}>Click For Data</button>
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
  );
};
export default About;
