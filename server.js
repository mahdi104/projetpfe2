//1 require express
const express=require('express')
const path=require('path')
//2 instance app
const app=express()

//5 require deotenv and configure
require('dotenv').config()
//6 Connect DataBase
const connectDB=require("./config/connectDB")
connectDB()

// middleware global
app.use(express.json());

// router
app.use("/api/admin", require("./router/admin"));
app.use("/api/user", require("./router/user"));
app.use("/api/product", require("./router/Product"));
app.use("/static", express.static(__dirname + "/public"));
//3 PORT
const PORT=process.env.PORT 


//serve static assetes if in production
if(process.env.NODE_ENV==='production'){
  //set static folder
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'siteweb','build','index.html'))
  })

}

//4 Create Server

app.listen(PORT, (error) => {
    error
      ? console.error(`failed To Connect to server !!! ${error}`)
      : console.log(`server is Runinig on ${PORT}...`);
  });
