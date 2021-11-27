import { connect, disconnect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected")
}).catch(error=>console.log(error))

process.on('uncaughtException',error=>{
    console.log(error)
    disconnect();
});