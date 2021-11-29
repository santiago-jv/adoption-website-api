import { check } from "express-validator";

export default [
    check('email')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isEmail().withMessage("The field must be a email"),

    check('password')
        .notEmpty().withMessage("The field cannot be empty")
        .isString().withMessage("The field must be of type string")
        .isLength({min:8}).withMessage("The field must have a minimum of 8 characters")

]
