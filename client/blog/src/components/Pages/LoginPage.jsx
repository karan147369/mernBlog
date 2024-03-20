import React, { useState } from 'react'
import  {Navigate} from 'react-router-dom'
function LoginPage() {
  const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [redirect,setRedirect]=useState(false)
const handleSubmit=async(e)=>{
e.preventDefault();
try {
 const response= await fetch("http://localhost:4000/login",{
    method:'POST',
    body:JSON.stringify({username,password}),
    headers:{'content-Type':'application/json'},
    credentials:'include'
  })
  if(response.ok){
    setRedirect(true)
  }
  else{
    alert('Wrong credentials')
  }
} catch (error) {
  console.log(error)  
}}
if(redirect){
  return <Navigate to={'/'}/>
}
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