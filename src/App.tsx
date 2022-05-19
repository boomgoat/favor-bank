import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/images/fb-icon.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col h-full justify-center items-center content-center">
        <div className="flex justify-center items-center">
          <img src={Logo} className="w-11 m-2 mt-4" alt="" />
          <h1 className="text-6xl text-green-500">Favor Bank</h1>
        </div>
        <p className="text-3xl text-gray-700 font-thin">
          Your go to skill sharing platform.{" "}
          <Link to="/gettingStarted">Start Now</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
