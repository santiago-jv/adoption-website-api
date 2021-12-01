import { validationResult } from "express-validator";


const validationHandlerMiddleware = (request,response,next) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        errors.type = 'InvalidDataFromRequest'
        next(errors);
    }
    next()

}
export default validationHandlerMiddleware

