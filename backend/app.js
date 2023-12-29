const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const model=require("./db.js")
const app=express()
app.use(bodyparser.json())
app.use(cors())


app.get("/",(req,res)=> //get api(application program interface)
{

// res.send("hello")
model.find().then(p=>res.send(p)).catch(err=>console.log(err))

})




app.get("/",(req,res)=> //get api(application program interface)
{

res.send("hello")
// model.find().then(p=>res.send(p)).catch(err=>console.log(err))

})





app.post("/",(req,res)=>
{
     const data=new model({
"username":req.body.username,
"password":req.body.password

     } ) 
     
     data.save().then(p=>res.send({"message":"data saved"})).catch(err=>console.log)
})



app.post("/login",(req,res)=>{
         model.find({"username":req.body.username}).then(p=>{
        if(  p[0].username===req.body.username && p[0].password===req.body.password)
                {
                res.send({"msg":"successfully login"})    
           }
     else{
             res.send({"msg":"login falied"})   
             }}).catch(err=>res.send({"msg":"invalid user"}))
                         
                             
              })












app.listen(7200,(err)=>
{
    if(!err)
        {
console.log("server on")
        }
})