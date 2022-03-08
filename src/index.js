import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "./context";

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
