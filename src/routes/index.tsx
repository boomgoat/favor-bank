import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../components/App";
import { NewUser } from "../modules";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="gettingStarted" element={<NewUser />} />
    </Routes>
  );
};
