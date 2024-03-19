const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://blog:ApqD3UCwOiUUK8uI@cluster0.3oorfez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>console.log("connected to database"))
.catch(()=>console.log("error while connecting to DB"));
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error)
  }

});
app.listen(4000,()=>console.log("Server is running at port 4000"));
