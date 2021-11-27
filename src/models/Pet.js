import { model, Schema } from "mongoose";

const petSchema = new Schema({
    name:{type:String, required:true } ,
    age: {type:Number, required:true},
    gender:{type:String, required:true},
    owner:{
        ref:"Owner",
        type:Schema.Types.ObjectId
    },
    personality: [String]
    
})

const Pet = model(petSchema);

export default Pet