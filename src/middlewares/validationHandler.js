import { validationResult } from "express-validator";


const validationHandler = (request,response,next) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        errors.type = 'InvalidDataFromRequest'
        next(errors);
    }
    next()

}
export default validationHandler

