import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import tasksStore from "./Redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={tasksStore}>
      <App />
    </Provider>
  </React.Fragment>
);
