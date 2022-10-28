import React from "react";

const Contact = () => {
  const [ex, setEx] = React.useState(null);
  // let ex = {};
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setEx(data));
  };
  return (
    <div>
      {!ex && <button onClick={() => handleClick()}>Employee Details</button>}
      {ex && <button onClick={() => setEx(null)}>Close</button>}
      {ex &&
        ex.map((items) => (
          <div>
            ***********************
            <li>{items.userId}</li>
            <li>{items.id}</li>
            <li>{items.title}</li>
          </div>
        ))}
    </div>
  );
};
export default Contact;
