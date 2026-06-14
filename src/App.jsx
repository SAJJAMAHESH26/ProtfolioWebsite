import React from "react";
import Web from "./Web";
import { CssBaseline } from "@mui/material";
import "./index.css";

function App() {
  return (
    <>
      {/* Reset CSS for better UI consistency */}
      <CssBaseline />

      {/* Main Portfolio Component */}
      <Web />
    </>
  );
}

export default App;