const express= require('express')
const cors = require('cors');
const User= require('./models/User')
const mongoose=require('mongoose')
const app=express();
app.use(cors());
app.use(express.json())
 mongoose.connect("mongodb+srv://blog:ApqD3UCwOiUUK8uI@cluster0.3oorfez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
app.get('/',(req,res)=>
{
    res.json('App is working fine')
})
app.post('/register',async(req,res)=>{
   const {username,password}=req.body
 const userDoc=await  User.create({username,password})
res.json(userDoc)
})
app.listen(4000)
