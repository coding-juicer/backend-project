import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_name } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()



// import express from "express";
// const app = express();
// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
//         app.on("errorrr",(error)=>{
//             console.error("ERROR",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`listen at the port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR",error);
//         throw error;
//     }
// })();