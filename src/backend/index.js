const express=require('express');
const app=express();
app.get('/fi',(req,res)=>
{
    res.send("nc");
})
app.listen(6000,()=>
{
    console.log("server started")
})