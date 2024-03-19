import React, { useState } from 'react'
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const handleSubmit=async(e)=>{
e.preventDefault();
try {
  await fetch("http://localhost:4000/login",{
    method:'POST',
    body:JSON.stringify({username,password}),
    headers:{'content-Type':'application/json'}
  })
} catch (error) {
  console.log(error)  
}
}
function LoginPage() {
  return (
   <form onSubmit={handleSubmit} className='login'>
    <h1>Login</h1>
<input type="text" placeholder="username" value={username}
onChange={(e)=>setUsername(e.target.value)}/>
<input type ='password' placeholder="password"
 value ={password}
 onChange={(e)=>setPassword(e.target.value)}/>
<button>Login</button>
   </form>
  )
}

export default LoginPage