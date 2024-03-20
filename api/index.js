const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const mongoose = require("mongoose");
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')
const app = express();
const salt=bcrypt.genSaltSync(10);
const secret='asdfadfs121@'
app.use(cors({credentials:true,origin:'http://127.0.0.1:5173'}));
app.use(express.json());
mongoose.connect(
  "mongodb+srv://blog:ApqD3UCwOiUUK8uI@cluster0.3oorfez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>console.log("connected to database"))
.catch(()=>console.log("error while connecting to DB"));
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username,
         password:bcrypt.hashSync(password,salt) });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error)
  }

});
app.post("/login",async (req,res)=>{
    const {username,password}=req.body
     try {
        const userDoc=await User.findOne({username})
        const passOk= bcrypt.compareSync(password,userDoc.password)
//    res.json(passOk)      
if(passOk){
    //login user
jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
if(err)throw err;
res.cookie('token',token).json('ok')
})
}   
else{
    res.status(400).json('wrong credentials')
}
} catch (error) {
      res.json(error)  
    }
})
app.listen(4000,()=>console.log("Server is running at port 4000"));
