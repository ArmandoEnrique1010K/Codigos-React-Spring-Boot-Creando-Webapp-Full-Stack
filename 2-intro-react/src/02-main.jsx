import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));
// const h1 = <div><ul><li>Hola mundo</li></ul></div>;
const ul = React.createElement(
  "section",
  null,
  React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "1"),
      React.createElement("li", null, "2"),
      React.createElement("li", null, "3"),
      React.createElement("li", null, "4"),
      React.createElement("li", null, "5"),
      React.createElement("li", null, "6")
    )
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
  ul
);
