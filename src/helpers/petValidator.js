import { check } from "express-validator";

export default [
    check('name')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isLength({min:2}).withMessage("The field must have a minimum of 2 characters"),

    check('photo')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string"),

    check('age')
        .notEmpty().withMessage("The field cannot be empty")
        .isNumeric().withMessage("The field must be of type number"),

    check('personality')
        .isArray().withMessage("The field must be of type array"),
        
    check('gender')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isLength({min:1,max:1}).withMessage("The field must be single character (M-F)")
        

]
