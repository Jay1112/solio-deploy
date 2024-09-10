import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";

export async function connectToDB(){
    try{
        const url = `${process.env.MONGODB_URL}/${DB_NAME}`;
        const connectionObj = await mongoose.connect(url);
        // console.log(`MongoDB Connected Successfully! DB Host : ${connectionObj.connection.host}`);
    }catch(error){
        console.log("MongoDB Connection Failed...");
        process.exit(1);
    }
}

