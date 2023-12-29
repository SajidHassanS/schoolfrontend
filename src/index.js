import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/index.css";
import "./styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import 'react-phone-input-2/lib/style.css'
import 'react-quill/dist/quill.snow.css';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
