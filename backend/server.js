//const expess = require("express");
import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5000; //if port is not defined in .env file then use 5000 as default port

app.use(express.json());//allows us to accept json data in the body of the request


app.use("/api/products",productRoutes);//all the routes in productRoutes will have /api/products as the prefix




app.listen(PORT,()=>{
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
})