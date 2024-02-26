var express= require('express')
var app=express();

const {MongoClient}=require('mongodb')

var connection="mongodb+srv://ahmadziad758:K64J8ZWLzndboJAh@cluster0.vwd87ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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
     res.sendFile(__dirname+"/form.html")
})

var fs= require('fs')

app.get("/userinfo", function(req,res){
     // var data=fs.readFileSync(__dirname+"/currentuser.txt")
     // res.json(data)

    var current= localStorage.getItem('currentUser')  //type of cash 
    res.json(data)
})

app.post("/login",urlEncoded, async(req,res)=>
{
      
      
      if (finduser= await collection.findOne({'email':req.body.email},{'password':req.body.password})) 
      {   //fs.writeFileSync(__dirname+"/currentuser.txt")
          //localStorage.setItem('currentUser', finduser)
          res.sendFile(__dirname+"/userinfo.html")
      }
      else{
          res.sendFile(__dirname+"/register.html")
      }
})


app.post("/register",urlEncoded, async(req,res)=>
{    //find 
     const createuser= await collection.insertOne({'email': req.body.email,'password':req.body.password,'username':req.body.username,'age':req.body.age,'gender':req.body.gender,})
    
})





var server= app.listen(8000,function()
{
     var host = server.address().address
     var port=server.address().port

     console.log("start my one")
})