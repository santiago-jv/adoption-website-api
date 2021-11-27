import { model, Schema } from "mongoose";

// remember the favorites
const ownerSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    phoneNumber:{type:Number, required:true},
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