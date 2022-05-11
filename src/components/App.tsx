import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col h-full justify-center items-center content-center">
        <h1 className="text-6xl">Favor Bank</h1>
        <p className="text-3xl font-thin">
          Your go to skill sharing platform.{" "}
          <Link to="/gettingStarted">Start Now</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
