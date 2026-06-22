const express=require("express");
const app=express();


app.use(express.json());


let urls={};


app.post("/shorten",(req,res)=>{


let url=req.body.url;


let code=Math.random()
.toString(36)
.substring(2,8);



urls[code]=url;


res.json({

short:"http://localhost:3000/"+code

});


});



app.get("/:code",(req,res)=>{


let url=urls[req.params.code];


res.redirect(url);


});


app.listen(3000,()=>{

console.log("Server running");

});