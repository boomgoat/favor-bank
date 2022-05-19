import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NewUser } from "../GettingStarted";
import { Header } from "../layout";

export const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="gettingStarted" element={<NewUser />} />
      </Routes>
    </div>
  );
};
