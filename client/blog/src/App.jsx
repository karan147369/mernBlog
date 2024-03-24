import React from "react";
import "./App.css";
import Login from "./components/Pages/LoginPage.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Register from "./components/Pages/RegisterPage.jsx";
import IndexPage from "./components/Pages/IndexPage.jsx";
import CreatePost from "./components/Pages/CreatePost.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
