import * as React from "react";
import './App.css';
import "@fontsource/open-sans"; 
import "@fontsource/open-sans/500.css";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/account/login"



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />} > */}
          <Route path="/" element={<Login />} />
         
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
