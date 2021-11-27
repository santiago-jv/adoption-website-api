import Owner from "../models/Owner";
import { hash, compare } from "bcrypt";
import jwt from 'jsonwebtoken';

const OwnerController = {};

OwnerController.loginOwner = async(request, response) => {
    let {email, password} = request.body;
    const owner = await Owner.findOne({ email})

    if(!owner){
        return response.status(400).json({message:'Email not found'});
    }
    console.log(owner);
    const isCorrectPassword = await compare(password, owner.password)
    if(!isCorrectPassword) return response.status(401).json({message:'Bad credentials'});

    const token = jwt.sign({id: owner._id},process.env.SECRET_KEY);

    return response.status(201).json({user:owner, token})

}
OwnerController.registerOwner = async (request, response,next) => {
    
    let {name, email, password, phoneNumber} = request.body;
    /* 
    if(!isValidOwnerData(name, email, password, phoneNumber)){
        return response.status(400).json({message:'Invalid data.'});
    }
    */

    try {
        password = await hash(password,10)
        const owner = await Owner.create({name, email, password, phoneNumber})
        console.log(owner);
        const token = jwt.sign({id: owner._id},process.env.SECRET_KEY);

        return response.status(201).json({user:owner, token})
    } catch (error) {
        console.log(error)
        error.type = 'createOwner'
        next(error)
    }
    
   
}

export default OwnerController;