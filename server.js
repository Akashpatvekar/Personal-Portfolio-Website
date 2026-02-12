const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Schema
const ContactSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String
});

const Contact = mongoose.model("Contact", ContactSchema);

// API
app.post("/contact", async(req,res)=>{
    const data = new Contact(req.body);
    await data.save();
    res.send("Message Saved!");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
