import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home/" exact element={< Home />}/>
            <Route path="/login/" exact element={< Login />}/> 
            <Route path="/contact/" exact element={< Login />}/>
            <Route path="/explore/" exact element={< Contact />}/>
            <Route path="/*" element={< PageNotFound />}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
