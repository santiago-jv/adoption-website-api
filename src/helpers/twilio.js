import twilio from 'twilio';
import {config} from 'dotenv';
config()

const client = twilio(
    process.env.ACCOUNT_SID,
    process.env.TOKEN_TWILIO
)
export default client