import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const AuthorizationMiddleware = (request,response,next) => {
    console.log(process.env.SECRET_KEY)
    let token = request.headers.authorization

    if(!(token && token.startsWith('Bearer '))){
        return response.status(400).json({
            message: "The token should be of type 'Bearer'."
        })
    }

    token = token.slice(7);
    const user = verify(token,process.env.SECRET_KEY)
    
    if(!user){
        return response.status(403).json({
            message:"Invalid access token."
        })
    }

    request.headers.user = user
    next()

}
export default AuthorizationMiddleware