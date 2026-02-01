import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/layout";
import Home from "./pages/Home";
  import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/Dashboard";



const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    <ToastContainer />

    </BrowserRouter>
    </>

  );
};

export default App;
