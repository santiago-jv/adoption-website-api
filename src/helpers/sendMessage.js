import client from './twilio'
import {config} from 'dotenv';
config()

const sendMessage = (phoneNumber)=> {
    return client.messages.create({
        to:'+57'+phoneNumber,
        from:process.env.PHONE_NUMBER,
        body:"Welcome message"
    })
}

export default sendMessage