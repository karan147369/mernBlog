import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
function Header() {
  const {setUserInfo,userInfo }=useContext(UserContext)
  useEffect(() => {
    fetch("http://127.0.0.1:5173/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo)
      });
    });
  }, []);
  const logout=()=>{
    fetch('http://127.0.0.1:5173/logout',{
      credentials:'include',
      method:'POST',
    })
    setUserInfo(null);
  }
  const username=userInfo?.username
  return (
    <header className="header">
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
         <a onClick={logout}>Logout</a>
            </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
