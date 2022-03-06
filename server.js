const express=require ("express");
const connectDB=require ("./config/dbConnect")
const app=express() ;
require('dotenv').config();

// routes
app.use(express.json());
app.use("/user",require("./routes/user"));


// connect to DB

connectDB();


// server

const PORT=process.env.PORT


app.listen(PORT, (err)=>
err? console.log(err) :console.log(`server is running on ${PORT}`)
);