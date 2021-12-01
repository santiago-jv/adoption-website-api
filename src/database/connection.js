import { connect, disconnect } from 'mongoose';
import {config} from 'dotenv';
config()

connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected")
}).catch(error=>console.log(error))

process.on('uncaughtException',error=>{
    console.log(error)
    disconnect();
});