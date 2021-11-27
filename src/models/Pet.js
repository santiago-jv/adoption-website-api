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

petSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.owner;
        delete returnedObject.__v;
    
    }
})

const Pet = model('Pet',petSchema);

export default Pet