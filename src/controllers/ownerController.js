import Owner from "../models/Owner";
import { hash } from "bcrypt";
import jwt from 'jsonwebtoken';

const OwnerController = {};

OwnerController.loginOwner = (request, response) => {
    
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
        return response.status(201).json(owner)
    } catch (error) {
        console.log(error)
        error.type = 'createOwner'
        next(error)
    }
    
   
}

export default OwnerController;