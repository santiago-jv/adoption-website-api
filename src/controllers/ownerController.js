import Owner from "../models/Owner";
import { hash, compare } from "bcrypt";
import jwt from 'jsonwebtoken';
import sendMessage from "../helpers/sendMessage";

const OwnerController = {};

OwnerController.loginOwner = async(request, response) => {
    let {email, password} = request.body;
    const owner = await Owner.findOne({ email})

    if(!owner){
        return response.status(400).json({message:'Email not found'});
    }

    const isCorrectPassword = await compare(password, owner.password)
    
    if(!isCorrectPassword) return response.status(401).json({message:'Bad credentials'});

    const token = jwt.sign({id: owner._id},process.env.SECRET_KEY);

    return response.status(201).json({user:owner, token})

}
OwnerController.registerOwner = async (request, response,next) => {
    let {name, email, photo, address, password, phoneNumber} = request.body;

    try {
        password = await hash(password,10)
        const owner = await Owner.create({name, email, photo,  address, password, phoneNumber})

        const token = jwt.sign({id: owner._id},process.env.SECRET_KEY);
        return response.status(201).json({user:owner, token})
    } catch (error) {
        console.log(error)
        error.message = 'There was an error creating the user';
        error.type = 'CreateObjectError';
        next(error)
    }
    
   
}

export default OwnerController;