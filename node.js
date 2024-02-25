var express= require('express')
var app=express();

const {MongoClient}=require('mongodb')

var connection="mongodb+srv://ahmadziad758:4GccFyQvxL_gGJx@cluster0.vwd87ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client= new MongoClient(connection)

const mydb= client.db('users')

const collection= mydb.collection('users')


app.get("/", function(req,res)
{
     res.send("hiii")
})

app.get("/users",async(req,res)=>{
     //find  =>{}=>all
     const users= await collection.find({}).toArray() 
     res.send(users)
})

app.get("/user/:username",async(req,res)=>{
     //find  =>{}=>all
     const users= await collection.findOne({'username':req.params.username}) 
     res.send(users)
})

var bodyParse= require('body-parser')

var urlEncoded= bodyParse.urlencoded({extended:false})

app.get("/form", function(req,res)
{
   // retunrn form .html 
})


app.post("/login",urlEncoded, async(req,res)=>
{
      const finduser= await collection.findOne({'username':req.body.username})
      if (finduser) 
      {
          res.sendFile(__dirname+"/userInfo.html")
      }
      else{
          res.sendFile(__dirname+"/register.html")
      }
})


app.post("/register",urlEncoded, async(req,res)=>
{    //find 
     const createuser= await collection.insertOne({'username': req.body.username})
    
})





var server= app.listen(9000,function()
{
     var host = server.address().address
     var port=server.address().port

     console.log("start my one")
})