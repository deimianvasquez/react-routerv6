import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./views/Home.jsx";
import TodoList from './views/TodoList.jsx'
import Contact from './views/Contact.jsx'
import Detail from "./component/Detail.jsx";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todos" element={<TodoList/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:theId" element={<Detail />} />
          <Route path="*" element={<h1>Error 404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
