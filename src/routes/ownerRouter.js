import { Router } from 'express';
import OwnerController from '../controllers/ownerController.js';
import loginValidatorMiddleware from '../helpers/loginValidator.js';
import registerValidatorMiddleware from '../helpers/registerValidator.js';
import validationHandlerMiddleware from '../middlewares/validationHandler.js';
const ownerRouter = Router();

ownerRouter.post('/login', loginValidatorMiddleware, validationHandlerMiddleware , OwnerController.loginOwner)
ownerRouter.post('/register', registerValidatorMiddleware, validationHandlerMiddleware , OwnerController.registerOwner)

export default ownerRouter;