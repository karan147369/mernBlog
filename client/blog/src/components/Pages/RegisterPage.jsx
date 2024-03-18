import React, { useState } from "react";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function register  (e)  {
    e.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
