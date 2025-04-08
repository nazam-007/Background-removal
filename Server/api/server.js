import 'dotenv/config';
import express, { request } from 'express'
import cors from 'cors'
import connectDB from '../config/mongodb.js';
import serverless from 'serverless-http';
// import connectDB from './config/mongodb.js';
// import { EventEmitter } from "events";
// EventEmitter.defaultMaxListeners = 15; // Set the limit higher


//App config
// import dotenv from "dotenv";
// dotenv.config();

//const PORT=process.env.PORT || 4000;
const app=express();
//await connectDB()

//Middleware 
app.use(express.json())  //whenever we get any request on this server it will parse using json
app.use(cors())  //tjhis will help to run on diffrednt server on backen server

//API ROUTES
app.get('/',(req,res)=>(res.send("API is Working")));

//app.listen(PORT,()=>console.log(`Server is running on port ${PORT} successfully`))

connectDB().then(() => {
    console.log("MongoDB connected");
  }).catch((err) => {
    console.error("DB connection failed:", err);
  });
  
  export const handler = serverless(app);