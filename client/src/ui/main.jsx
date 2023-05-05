import React from "react";
import ReactDOM from "react-dom/client";
import Root from "ui/root";

const UI = (applicationAdapter) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Root applicationAdapter={applicationAdapter} />
    </React.StrictMode>
  );
};

export default UI;
