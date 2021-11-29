import { model, Schema } from "mongoose";
import defaultProperties from "../helpers/defaultProperties";

// remember the favorites
const ownerSchema = new Schema({
    name:defaultProperties(),
    email:defaultProperties(undefined,true),
    password:defaultProperties(),
    phoneNumber:defaultProperties(Number),
    pets: [{
        ref:"Pet",
        type:Schema.Types.ObjectId,
        default:[]
    }],
}) 

ownerSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    }
})

const Owner = model('Owner',ownerSchema);

export default Owner