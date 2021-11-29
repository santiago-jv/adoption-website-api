import { Router } from 'express';
import OwnerController from '../controllers/ownerController.js';
import loginValidator from '../helpers/loginValidator.js';
import registerValidator from '../helpers/registerValidator.js';
import validationHandler from '../middlewares/validationHandler.js';
const ownerRouter = Router();

ownerRouter.post('/login', loginValidator, validationHandler , OwnerController.loginOwner)
ownerRouter.post('/register', registerValidator, validationHandler , OwnerController.registerOwner)

export default ownerRouter;