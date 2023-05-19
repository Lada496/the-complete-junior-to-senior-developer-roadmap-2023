import React from "react";
import ReactDOM from "react-dom/client";

const Hello = () => <div>Hello!</div>;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);
