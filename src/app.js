const express = require('express');
const app =express();
const path = require('path');

const port=process.env.PORT || 8000
// public path 
const static_path = path.join(__dirname,"../public");
app.use(express.static( static_path));

// routing 
app.get("", (req,res)=>{
    res.send("Welcome to Soumitra Bag");
})

app.get("/about", (req,res)=>{
    res.send("Welcome to Soumitra Bag");
})


app.get("*", (req,res)=>{
    res.send("404 Error page");
})








app.listen(port,()=>{
    console.log(`Server start at the port number ${port}`)
})
