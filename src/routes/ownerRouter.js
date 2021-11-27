import { Router } from 'express';
import OwnerController from '../controllers/ownerController.js';
const ownerRouter = Router();

ownerRouter.post('/login', OwnerController.loginOwner)
ownerRouter.post('/register', OwnerController.registerOwner)

export default ownerRouter;