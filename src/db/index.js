import mongoose from "mongoose";
import { DB_name } from "../constants.js";

//connet data base
const connectDB = async ()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
       console.log(`\n Mongoose connect !! DB hose ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("ther is error",error);
        process.exit(1)
    }
}

export default connectDB