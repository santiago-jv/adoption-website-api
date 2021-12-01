import { model, Schema } from "mongoose";
import defaultProperties from "../helpers/defaultProperties";

const petSchema = new Schema({
    name:defaultProperties() ,
    photo:defaultProperties() ,
    age: defaultProperties(Number),
    gender:defaultProperties(),
    breed:defaultProperties(),
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