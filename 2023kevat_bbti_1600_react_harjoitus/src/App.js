import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {Message} from "./pages/Messages";
import { Buttons } from "./pages/Buttons";
import { Router } from "./pages/Router";

function App() {
  return (
    <div>
      <Message/>
      <Buttons/>
    </div>
  );
}

export default App;
