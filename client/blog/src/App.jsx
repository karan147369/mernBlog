import React from 'react'
import Home from './components/Home.jsx'
import './App.css'
import Posts from './components/Posts.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home/>}
      />
      <Route path="/login" element={
        <div>Login</div>
      }/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App