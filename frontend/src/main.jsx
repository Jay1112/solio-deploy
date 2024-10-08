import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
      <Toaster />
    </Router>
  </Provider>
);
