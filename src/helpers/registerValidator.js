import { check } from "express-validator";

export default [
    check('name')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isLength({min:2}).withMessage("The field must have a minimum of 2 characters"),
        
    check('photo')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string"),

    check('phoneNumber')
        .notEmpty().withMessage("The field cannot be empty")
        .isMobilePhone('es-CO').withMessage("The field must be a phone number from Colombia"),

    check('address')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string"),
        
    check('email')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isEmail().withMessage("The field must be a email"),
        
    check('password')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isLength({min:8}).withMessage("The field must have a minimum of 8 characters")

]
