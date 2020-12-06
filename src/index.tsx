import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";

import reportWebVitals from "./reportWebVitals";
import App from "./Components/App";
import Footer from "./Components/Footer";
import { ApolloProvider } from "@apollo/client";
import Client from "./Apollo/Client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <div className="w-full min-h-screen h-auto flex flex-col justify-between">
        <App />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </div>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
